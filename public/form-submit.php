<?php
// Simple form submission handler for cPanel hosting.
// Accepts JSON payload and emails the submission with JSON and CSV attachments.

// CONFIGURE THIS:
$to = 'mulembecommunitysydneyau@gmail.com';
$from = 'no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'example.com');
$subject = 'New Welfare Form Submission';

header('Content-Type: application/json');
header('Cache-Control: no-store');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'message' => 'Method Not Allowed']);
  exit;
}

// Read JSON body
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'message' => 'Invalid JSON']);
  exit;
}

$applicant = $data['applicant'] ?? [];
$beneficiaries = $data['beneficiaries'] ?? [];
$signatureDataUrl = $data['signatureDataUrl'] ?? '';

// Build HTML body
function e($v) { return htmlspecialchars((string)$v ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }

$htmlBody = '<h2>New Welfare Form Submission</h2>';
$htmlBody .= '<h3>Applicant Details</h3>';
$fields = [
  'First Name' => $applicant['firstName'] ?? '',
  'Middle Name' => $applicant['middleName'] ?? '',
  'Surname' => $applicant['surname'] ?? '',
  'Email' => $applicant['email'] ?? '',
  'Phone' => $applicant['phone'] ?? '',
  'Street' => $applicant['street'] ?? '',
  'Suburb' => $applicant['suburb'] ?? '',
  'State' => $applicant['state'] ?? '',
  'Postcode' => $applicant['postcode'] ?? '',
  'Country' => $applicant['country'] ?? '',
  'Accepted Constitution' => !empty($applicant['constitution']) ? 'Yes' : 'No',
  'Accepted Consent' => !empty($applicant['consent']) ? 'Yes' : 'No',
];
$htmlBody .= '<table border="1" cellpadding="6" cellspacing="0">';
foreach ($fields as $k => $v) {
  $htmlBody .= '<tr><td><strong>' . e($k) . '</strong></td><td>' . e($v) . '</td></tr>';
}
$htmlBody .= '</table>';

// Beneficiaries
$htmlBody .= '<h3>Beneficiaries</h3>';
if (is_array($beneficiaries) && count($beneficiaries) > 0) {
  $htmlBody .= '<table border="1" cellpadding="6" cellspacing="0">';
  $htmlBody .= '<tr><th>#</th><th>First</th><th>Middle</th><th>Surname</th><th>DOB</th><th>Relationship</th></tr>';
  foreach ($beneficiaries as $i => $b) {
    $htmlBody .= '<tr>'
      . '<td>' . e($i + 1) . '</td>'
      . '<td>' . e($b['firstName'] ?? '') . '</td>'
      . '<td>' . e($b['middleName'] ?? '') . '</td>'
      . '<td>' . e($b['surname'] ?? '') . '</td>'
      . '<td>' . e($b['dateOfBirth'] ?? '') . '</td>'
      . '<td>' . e($b['relationship'] ?? '') . '</td>'
      . '</tr>';
  }
  $htmlBody .= '</table>';
} else {
  $htmlBody .= '<p>No beneficiaries provided.</p>';
}

// Optional inline signature preview
if (is_string($signatureDataUrl) && strpos($signatureDataUrl, 'data:image/png;base64,') === 0) {
  $htmlBody .= '<h3>Signature</h3>';
  $htmlBody .= '<p><em>Attached as PNG. Inline preview below (may not render in all clients):</em></p>';
  $htmlBody .= '<img alt="Signature" style="max-width:400px;border:1px solid #ccc" src="' . e($signatureDataUrl) . '" />';
}

// Create attachments
$attachments = [];

// JSON attachment
$jsonPretty = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
$attachments[] = [
  'filename' => 'submission.json',
  'content' => $jsonPretty,
  'type' => 'application/json',
];

// CSV attachment (flat, basic)
$csv = fopen('php://temp', 'r+');
fputcsv($csv, ['Field', 'Value']);
foreach ($fields as $k => $v) {
  fputcsv($csv, [$k, $v]);
}
fputcsv($csv, []);
fputcsv($csv, ['Beneficiaries']);
fputcsv($csv, ['#','First','Middle','Surname','DOB','Relationship']);
foreach ($beneficiaries as $i => $b) {
  fputcsv($csv, [
    $i + 1,
    $b['firstName'] ?? '',
    $b['middleName'] ?? '',
    $b['surname'] ?? '',
    $b['dateOfBirth'] ?? '',
    $b['relationship'] ?? '',
  ]);
}
rewind($csv);
$csvContent = stream_get_contents($csv);
fclose($csv);
$attachments[] = [
  'filename' => 'submission.csv',
  'content' => $csvContent,
  'type' => 'text/csv',
];

// Signature attachment if provided
$signatureAttached = false;
if (is_string($signatureDataUrl) && strpos($signatureDataUrl, 'data:image/png;base64,') === 0) {
  $base64 = substr($signatureDataUrl, strlen('data:image/png;base64,'));
  $binary = base64_decode($base64);
  if ($binary !== false) {
    $attachments[] = [
      'filename' => 'signature.png',
      'content' => $binary,
      'type' => 'image/png',
      'is_binary' => true,
    ];
    $signatureAttached = true;
  }
}

// Build MIME email with attachments
$boundary = '=_BOUNDARY_' . md5(uniqid((string)mt_rand(), true));
$headers = [];
$headers[] = 'From: ' . $from;
$headers[] = 'Reply-To: ' . ($applicant['email'] ?? $from);
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';

$message = '';
$message .= '--' . $boundary . "\r\n";
$message .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
$message .= 'Content-Transfer-Encoding: base64' . "\r\n\r\n";
$message .= chunk_split(base64_encode($htmlBody));

foreach ($attachments as $att) {
  $filename = $att['filename'];
  $type = $att['type'];
  $content = $att['content'];
  $isBinary = !empty($att['is_binary']);

  $message .= '--' . $boundary . "\r\n";
  $message .= 'Content-Type: ' . $type . '; name="' . addslashes($filename) . '"' . "\r\n";
  $message .= 'Content-Disposition: attachment; filename="' . addslashes($filename) . '"' . "\r\n";
  $message .= 'Content-Transfer-Encoding: base64' . "\r\n\r\n";
  $message .= chunk_split(base64_encode($content));
}

$message .= '--' . $boundary . '--';

$ok = @mail($to, $subject, $message, implode("\r\n", $headers));

if ($ok) {
  echo json_encode(['ok' => true, 'message' => 'Submission sent', 'signatureAttached' => $signatureAttached]);
} else {
  http_response_code(500);
  echo json_encode(['ok' => false, 'message' => 'Failed to send email']);
}


