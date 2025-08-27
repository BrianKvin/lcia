import React, { useEffect, useRef, useState } from 'react';

const Welfare: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    surname: '',
    email: '',
    phone: '',
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    country: 'Australia',
    constitution: false,
    consent: false
  });

  const [beneficiaries, setBeneficiaries] = useState([
    { firstName: '', middleName: '', surname: '', dateOfBirth: '', relationship: '' }
  ]);

  // Signature canvas state (keeps functionality fully client-side)
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [strokes, setStrokes] = useState<Array<Array<{ x: number; y: number }>>>([]);
  const currentStrokeRef = useRef<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#111111';
      ctxRef.current = ctx;
      redrawSignature();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCanvasPos = (e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      const t = e.touches[0];
      return { x: t.clientX - rect.left, y: t.clientY - rect.top };
    }
    const m = e as MouseEvent;
    return { x: m.clientX - rect.left, y: m.clientY - rect.top };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDrawing(true);
    currentStrokeRef.current = [];
    const pos = getCanvasPos('nativeEvent' in e ? (e.nativeEvent as MouseEvent | TouchEvent) : (e as MouseEvent | TouchEvent));
    currentStrokeRef.current.push(pos);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    const pos = getCanvasPos('nativeEvent' in e ? (e.nativeEvent as MouseEvent | TouchEvent) : (e as MouseEvent | TouchEvent));
    const stroke = currentStrokeRef.current;
    stroke.push(pos);
    // draw segment
    const len = stroke.length;
    if (len < 2) return;
    ctx.beginPath();
    ctx.moveTo(stroke[len - 2].x, stroke[len - 2].y);
    ctx.lineTo(stroke[len - 1].x, stroke[len - 1].y);
    ctx.stroke();
  };

  const endDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (currentStrokeRef.current.length > 0) {
      setStrokes(prev => [...prev, currentStrokeRef.current]);
      currentStrokeRef.current = [];
    }
  };

  const clearSignature = () => {
    setStrokes([]);
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const undoSignature = () => {
    setStrokes(prev => {
      const next = prev.slice(0, -1);
      setTimeout(() => redrawSignature(next), 0);
      return next;
    });
  };

  const redrawSignature = (custom?: Array<Array<{ x: number; y: number }>>) => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const data = custom ?? strokes;
    ctx.beginPath();
    data.forEach(stroke => {
      stroke.forEach((p, i) => {
        if (i === 0) {
          ctx.moveTo(p.x, p.y);
        } else {
          ctx.lineTo(p.x, p.y);
        }
      });
    });
    ctx.stroke();
  };

  const addBeneficiary = () => {
    if (beneficiaries.length < 5) {
      setBeneficiaries(prev => [...prev, { firstName: '', middleName: '', surname: '', dateOfBirth: '', relationship: '' }]);
    }
  };

  const removeBeneficiary = (index: number) => {
    setBeneficiaries(prev => prev.filter((_, i) => i !== index));
  };

  const updateBeneficiary = (index: number, field: string, value: string) => {
    setBeneficiaries(prev => prev.map((ben, i) => i === index ? { ...ben, [field]: value } : ben));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.constitution || !formData.consent) {
      alert("Please accept both the constitution and consent declarations.");
      return;
    }

    // Capture signature as data URL (PNG)
    const signatureDataUrl = (() => {
      const canvas = canvasRef.current;
      try {
        return canvas ? canvas.toDataURL("image/png") : "";
      } catch {
        return "";
      }
    })();

    const payload = {
      applicant: formData,
      beneficiaries,
      signatureDataUrl,
    };

    try {
      setIsSubmitting(true);
      const res = await fetch("form-submit.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || !data?.ok) {
        throw new Error(data?.message || "Failed to submit form");
      }
      alert("Your application has been sent successfully. A confirmation has been emailed.");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred";
      alert("Submission failed: " + message + "\nPlease try again later or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="welfare" className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          {/* Logo */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <img 
              src="/lcia-logo.jpg" 
              alt="Mulembe Community NSW Logo" 
              className="w-32 sm:w-40 h-auto object-contain"
            />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Mulembe Community NSW Inc. Registration Form</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">Apply for welfare assistance from the Mulembe Community NSW. Please fill out all required fields accurately.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Applicant Details */}
          <section className="bg-white rounded-xl shadow-lg">
            <div className="rounded-t-xl bg-black text-white px-6 py-3 border-b-4 border-luhya-gold">
              <h2 className="text-lg font-semibold">Applicant Details</h2>
            </div>
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">First/Given Name *</label>
                  <input id="firstName" type="text" value={formData.firstName} onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold" />
                </div>
                <div>
                  <label htmlFor="middleName" className="block text-sm font-medium text-gray-900 mb-2">Middle Name</label>
                  <input id="middleName" type="text" value={formData.middleName} onChange={(e) => setFormData(prev => ({ ...prev, middleName: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold" />
                </div>
                <div className="sm:col-span-2 lg:col-span-1">
                  <label htmlFor="surname" className="block text-sm font-medium text-gray-900 mb-2">Surname/Family Name *</label>
                  <input id="surname" type="text" value={formData.surname} onChange={(e) => setFormData(prev => ({ ...prev, surname: e.target.value }))} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="street" className="block text-sm font-medium text-gray-900 mb-2">Street Address *</label>
                  <input id="street" type="text" value={formData.street} onChange={(e) => setFormData(prev => ({ ...prev, street: e.target.value }))} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="suburb" className="block text-sm font-medium text-gray-900 mb-2">Suburb/Town *</label>
                  <input id="suburb" type="text" value={formData.suburb} onChange={(e) => setFormData(prev => ({ ...prev, suburb: e.target.value }))} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold" />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-900 mb-2">State/Territory *</label>
                  <select id="state" value={formData.state} onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold">
                    <option value="">Select State</option>
                    <option value="NSW">New South Wales</option>
                    <option value="VIC">Victoria</option>
                    <option value="QLD">Queensland</option>
                    <option value="WA">Western Australia</option>
                    <option value="SA">South Australia</option>
                    <option value="TAS">Tasmania</option>
                    <option value="ACT">Australian Capital Territory</option>
                    <option value="NT">Northern Territory</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-gray-900 mb-2">Postcode *</label>
                  <input id="postcode" type="text" value={formData.postcode} onChange={(e) => setFormData(prev => ({ ...prev, postcode: e.target.value }))} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-900 mb-2">Country</label>
                  <input id="country" type="text" value={formData.country} onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">Phone *</label>
                  <input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">Email *</label>
                  <input id="email" type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold" />
                </div>
              </div>
            </div>
          </section>

          {/* Welfare Beneficiaries */}
          <section className="bg-white rounded-xl shadow-lg">
            <div className="rounded-t-xl bg-black text-white px-6 py-3 border-b-4 border-luhya-gold">
              <h2 className="text-lg font-semibold">Welfare Beneficiaries (5 Family Members)</h2>
            </div>
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {beneficiaries.map((beneficiary, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-luhya-gold text-black font-bold">#{index + 1}</span>
                      <h4 className="text-lg font-semibold">Beneficiary</h4>
                    </div>
                    {beneficiaries.length > 1 && (
                      <button type="button" onClick={() => removeBeneficiary(index)} className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50">Remove</button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor={`ben-${index}-firstName`} className="block text-sm font-medium text-gray-900 mb-2">First/Given Name</label>
                      <input id={`ben-${index}-firstName`} type="text" value={beneficiary.firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateBeneficiary(index, 'firstName', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold" />
                    </div>
                    <div>
                      <label htmlFor={`ben-${index}-middleName`} className="block text-sm font-medium text-gray-900 mb-2">Middle Name</label>
                      <input id={`ben-${index}-middleName`} type="text" value={beneficiary.middleName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateBeneficiary(index, 'middleName', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold" />
                    </div>
                    <div>
                      <label htmlFor={`ben-${index}-surname`} className="block text-sm font-medium text-gray-900 mb-2">Surname/Family Name</label>
                      <input id={`ben-${index}-surname`} type="text" value={beneficiary.surname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateBeneficiary(index, 'surname', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={`ben-${index}-dob`} className="block text-sm font-medium text-gray-900 mb-2">Date of Birth</label>
                      <input id={`ben-${index}-dob`} type="date" value={beneficiary.dateOfBirth} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateBeneficiary(index, 'dateOfBirth', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold" />
                    </div>
                    <div>
                      <label htmlFor={`ben-${index}-relationship`} className="block text-sm font-medium text-gray-900 mb-2">Relationship</label>
                      <select id={`ben-${index}-relationship`} value={beneficiary.relationship} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateBeneficiary(index, 'relationship', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luhya-gold">
                        <option value="">Select...</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Child">Child</option>
                        <option value="Parent">Parent</option>
                        <option value="Sibling">Sibling</option>
                        <option value="Relative">Relative</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}

              {beneficiaries.length < 5 && (
                <button type="button" onClick={addBeneficiary} className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Add Another Beneficiary</button>
              )}
            </div>
          </section>

          {/* Signature */}
          <section className="bg-white rounded-xl shadow-lg">
            <div className="rounded-t-xl bg-black text-white px-6 py-3 border-b-4 border-luhya-gold">
              <h2 className="text-lg font-semibold">Signature</h2>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-sm font-medium text-gray-900 mb-3">Please sign below</p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-2">
                <div
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={endDrawing}
                  onMouseLeave={endDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={endDrawing}
                  className="relative w-full h-48 bg-white rounded-md"
                >
                  <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <button type="button" onClick={clearSignature} className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Clear</button>
                <button type="button" onClick={undoSignature} className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Undo</button>
              </div>
            </div>
          </section>

          {/* Declarations */}
          <section className="bg-white rounded-xl shadow-lg">
            <div className="rounded-t-xl bg-black text-white px-6 py-3 border-b-4 border-luhya-gold">
              <h2 className="text-lg font-semibold">Declarations</h2>
            </div>
            <div className="p-4 sm:p-6 space-y-4">
              <label htmlFor="constitution" className="flex items-start gap-3">
                <input type="checkbox" id="constitution" checked={formData.constitution} onChange={(e) => setFormData(prev => ({ ...prev, constitution: e.target.checked }))} required className="mt-1 h-4 w-4 text-luhya-gold focus:ring-luhya-gold border-gray-300 rounded" />
                <span className="text-sm leading-relaxed">I confirm I have read and understand the Constitution of the Association and agree to abide by it.</span>
              </label>
              <label htmlFor="consent" className="flex items-start gap-3">
                <input type="checkbox" id="consent" checked={formData.consent} onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))} required className="mt-1 h-4 w-4 text-luhya-gold focus:ring-luhya-gold border-gray-300 rounded" />
                <span className="text-sm leading-relaxed">I consent to my personal information being collected, stored, and used for membership administration in accordance with the Privacy Notice below.</span>
              </label>
              <p className="text-sm text-gray-600 italic">These must be checked to submit.</p>
            </div>
          </section>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <button type="button" onClick={handlePrint} className="w-full sm:w-auto px-4 py-2 rounded-md border border-luhya-gold text-black bg-white hover:bg-luhya-gold/10">Print / Save as PDF</button>
            <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-6 py-2 rounded-md bg-luhya-gold text-black font-semibold hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed">{isSubmitting ? "Submitting..." : "Submit"}</button>
          </div>

          {/* Privacy Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Privacy Notice</h3>
            <p className="text-xs sm:text-sm text-gray-800">The Mulembe Community NSW collects personal information to administer membership and welfare beneficiary records. Your data will be stored securely and only used for lawful purposes related to the Association's functions. You may request access to, or correction of, your information by contacting the Secretary.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welfare;
