<?php
// Simple form submission handler for cPanel hosting.
// Accepts JSON payload and emails the submission with JSON and CSV attachments.

// CONFIGURE THIS:
$to = 'mulembecommunitysydneyau@gmail.com';
$from = 'no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'example.com');

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
$signature = $data['signature'] ?? '';
$constitutionConsent = $data['constitutionConsent'] ?? false;
$privacyConsent = $data['privacyConsent'] ?? false;

// Community registration form data
$formType = $data['type'] ?? 'welfare';
$fullName = $data['fullName'] ?? '';
$email = $data['email'] ?? '';
$mobile = $data['mobile'] ?? '';
$timestamp = $data['timestamp'] ?? date('Y-m-d H:i:s');

// Set email subject based on form type
if ($formType === 'community_registration') {
  $subject = 'New Community Registration - ' . e($fullName);
} else {
  $subject = 'New MCNSW Registration Form Submission - ' . ($applicant['firstName'] ?? 'Unknown') . ' ' . ($applicant['surname'] ?? '');
}

// Build HTML body
function e($v) { return htmlspecialchars((string)$v ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }

if ($formType === 'community_registration') {
  // Community registration form
  $htmlBody = '<h2>New Community Registration</h2>';
  $htmlBody .= '<p><strong>Submission Date:</strong> ' . e($timestamp) . '</p>';
  $htmlBody .= '<p><strong>Submitted via:</strong> Mulembe Community NSW Website</p>';
  $htmlBody .= '<hr>';
  $htmlBody .= '<h3>Registration Details</h3>';
  $htmlBody .= '<table border="1" cellpadding="6" cellspacing="0">';
  $htmlBody .= '<tr><td><strong>Full Name</strong></td><td>' . e($fullName) . '</td></tr>';
  $htmlBody .= '<tr><td><strong>Email</strong></td><td>' . e($email) . '</td></tr>';
  $htmlBody .= '<tr><td><strong>Mobile</strong></td><td>' . e($mobile) . '</td></tr>';
  $htmlBody .= '</table>';
  $htmlBody .= '<p><strong>Action Required:</strong> Please contact this person to welcome them to our community and provide information about upcoming events and membership benefits.</p>';
} else {
  // Welfare form
  $htmlBody = '<h2>New MCNSW Registration Form Submission</h2>';
  $htmlBody .= '<p><strong>Submission Date:</strong> ' . date('Y-m-d H:i:s') . '</p>';
  $htmlBody .= '<p><strong>Submitted via:</strong> Mulembe Community NSW Website</p>';
  $htmlBody .= '<hr>';
  $htmlBody .= '<h3>Applicant Details</h3>';
  $fields = [
    'First Name' => $applicant['firstName'] ?? '',
    'Middle Name' => $applicant['middleName'] ?? '',
    'Surname' => $applicant['surname'] ?? '',
    'Email' => $applicant['email'] ?? '',
    'Phone' => $applicant['phone'] ?? '',
    'Street Address' => $applicant['street'] ?? '',
    'Suburb/Town' => $applicant['suburb'] ?? '',
    'State/Territory' => $applicant['state'] ?? '',
    'Postcode' => $applicant['postcode'] ?? '',
    'Country' => $applicant['country'] ?? '',
    'Constitution Consent' => $constitutionConsent ? 'Yes' : 'No',
    'Privacy Consent' => $privacyConsent ? 'Yes' : 'No',
  ];
  $htmlBody .= '<table border="1" cellpadding="6" cellspacing="0">';
  foreach ($fields as $k => $v) {
    $htmlBody .= '<tr><td><strong>' . e($k) . '</strong></td><td>' . e($v) . '</td></tr>';
  }
  $htmlBody .= '</table>';
}

// Beneficiaries (only for welfare form)
if ($formType !== 'community_registration') {
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
}

// Optional inline signature preview (only for welfare form)
if ($formType !== 'community_registration' && is_string($signature) && strpos($signature, 'data:image/png;base64,') === 0) {
  $htmlBody .= '<h3>Digital Signature</h3>';
  $htmlBody .= '<p><em>Attached as PNG. Inline preview below (may not render in all clients):</em></p>';
  $htmlBody .= '<img alt="Signature" style="max-width:400px;border:1px solid #ccc" src="' . e($signature) . '" />';
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

// Signature attachment if provided (only for welfare form)
$signatureAttached = false;
if ($formType !== 'community_registration' && is_string($signature) && strpos($signature, 'data:image/png;base64,') === 0) {
  $base64 = substr($signature, strlen('data:image/png;base64,'));
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
$headers[] = 'Reply-To: ' . ($formType === 'community_registration' ? $email : ($applicant['email'] ?? $from));
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
  if ($formType === 'community_registration') {
    echo json_encode(['ok' => true, 'message' => 'Community registration submitted successfully to MCNSW']);
  } else {
    echo json_encode(['ok' => true, 'message' => 'Registration form submitted successfully to MCNSW', 'signatureAttached' => $signatureAttached]);
  }
} else {
  http_response_code(500);
  if ($formType === 'community_registration') {
    echo json_encode(['ok' => false, 'message' => 'Failed to send community registration. Please try again or contact us directly.']);
  } else {
    echo json_encode(['ok' => false, 'message' => 'Failed to send registration form. Please try again or contact us directly.']);
  }
}


