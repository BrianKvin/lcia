import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Printer, Eraser, Undo2, CheckCircle2, ArrowRight, Lock, Plus } from "lucide-react";
import { COMMUNITY_REGISTRATION_FEE, WELFARE_CONTRIBUTION, JOINING_TOTAL, WELFARE_JOINING_PAYMENT_URL } from "@/constants/welfare";
import { useState, useRef, useEffect } from "react";
import type React from "react";

// Eligible beneficiaries under Article 9 of the Welfare Constitution. Values are sent as-is in the email.
const BENEFICIARY_RELATIONSHIPS = [
  "Father (biological)",
  "Mother (biological)",
  "Stepparent / Legal guardian",
  "Spouse",
  "Child",
  "Sibling (same biological mother)",
] as const;

const BENEFICIARY_COUNT = 5;

const createEmptyBeneficiary = () => ({
  firstName: "",
  middleName: "",
  surname: "",
  phone: "",
  relationship: "",
});

const createEmptyNextOfKin = () => ({
  firstName: "",
  middleName: "",
  surname: "",
  phone: "",
});

const createEmptyForm = () => ({
  // Applicant Details
  firstName: '',
  middleName: '',
  surname: '',
  email: '',
  street: '',
  suburb: '',
  state: '',
  postcode: '',
  country: 'Australia',
  phone: '',
  nextOfKin: createEmptyNextOfKin(),
  beneficiaries: Array(BENEFICIARY_COUNT).fill(null).map(() => createEmptyBeneficiary()),
  // Signature and declarations
  signature: '',
  constitutionConsent: false,
  privacyConsent: false,
});

const inputClass = "h-11 rounded-xl border-[#d9d3c6] bg-white focus-visible:ring-[#e0b75a]";
const labelClass = "text-sm font-medium text-[#17201b]";

const FormSection = ({ step, title, description, children }: {
  step: number;
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section className="rounded-3xl border border-[#e5e1d8] bg-white p-5 sm:p-8">
    <div className="flex items-start gap-4 mb-6">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0f2c20] font-display font-bold text-[#e0b75a]">
        {step}
      </span>
      <div>
        <h3 className="font-display font-bold text-2xl text-[#17201b]">{title}</h3>
        {description && <div className="mt-1.5 text-sm sm:text-base text-gray-600 leading-relaxed">{description}</div>}
      </div>
    </div>
    {children}
  </section>
);

const WelfareApplicationForm = () => {
  const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '/form-submit.php';
  const [formData, setFormData] = useState(createEmptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [beneficiaryCount, setBeneficiaryCount] = useState(1);

  const signatureRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  // Ensure crisp drawing on high-DPI screens and when resizing
  const resizeCanvasForDPR = () => {
    const canvas = signatureRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = Math.floor(rect.width * ratio);
    canvas.height = Math.floor(rect.height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#111827';
  };

  // Initialize once and on resize
  useEffect(() => {
    resizeCanvasForDPR();
    const onResize = () => {
      // Preserve last drawing on resize by restoring top of history if present
      const last = history[history.length - 1];
      resizeCanvasForDPR();
      if (last) {
        const canvas = signatureRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;
        const img = new Image();
        img.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = last;
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextOfKinChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      nextOfKin: { ...prev.nextOfKin, [field]: value },
    }));
  };

  const handleBeneficiaryChange = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      beneficiaries: prev.beneficiaries.map((beneficiary, i) =>
        i === index ? { ...beneficiary, [field]: value } : beneficiary
      )
    }));
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [field]: checked }));
  };

  // Signature pad functionality
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = signatureRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Save snapshot for undo before a new stroke
    try {
      const snap = canvas.toDataURL('image/png');
      setHistory(prev => [...prev, snap].slice(-20));
    } catch {
      // Ignore errors when saving snapshot
    }

    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#111827';
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = signatureRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = signatureRef.current;
    if (!canvas) return;

    const signatureDataUrl = canvas.toDataURL();
    setFormData(prev => ({ ...prev, signature: signatureDataUrl }));
  };

  // Touch support (mobile) with scroll prevention
  const getTouchPos = (touch: React.Touch, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
  };

  const startDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(true);
    const canvas = signatureRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Save snapshot for undo
    try {
      const snap = canvas.toDataURL('image/png');
      setHistory(prev => [...prev, snap].slice(-20));
    } catch {
      // Ignore errors when saving snapshot
    }

    const t = e.touches[0];
    const { x, y } = getTouchPos(t, canvas);
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#111827';
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const drawTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = signatureRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const t = e.touches[0];
    const { x, y } = getTouchPos(t, canvas);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(false);
    const canvas = signatureRef.current;
    if (!canvas) return;
    const signatureDataUrl = canvas.toDataURL();
    setFormData(prev => ({ ...prev, signature: signatureDataUrl }));
  };

  const clearSignature = () => {
    const canvas = signatureRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setFormData(prev => ({ ...prev, signature: '' }));
  };

  const undoSignature = () => {
    const canvas = signatureRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const prev = history[history.length - 1];
    if (!prev) return;
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setHistory(h => h.slice(0, -1));
      setFormData(f => ({ ...f, signature: canvas.toDataURL() }));
    };
    img.src = prev;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.constitutionConsent || !formData.privacyConsent) {
      alert('Please check both consent boxes to submit the form.');
      return;
    }

    const payload = {
      applicant: {
        firstName: formData.firstName,
        middleName: formData.middleName,
        surname: formData.surname,
        email: formData.email,
        street: formData.street,
        suburb: formData.suburb,
        state: formData.state,
        postcode: formData.postcode,
        country: formData.country,
        phone: formData.phone,
      },
      beneficiaries: formData.beneficiaries.filter(ben =>
        ben.firstName && ben.surname
      ),
      nextOfKin: formData.nextOfKin,
      signature: formData.signature,
      constitutionConsent: formData.constitutionConsent,
      privacyConsent: formData.privacyConsent,
    };

    setIsSubmitting(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({})) as { message?: string };
      if (!res.ok) throw new Error(data.message || 'Submission failed');
      setFormData(createEmptyForm());
      setBeneficiaryCount(1);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      alert(`There was a problem submitting your application. Please try again.\n${(err as Error).message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#e5e1d8] bg-white p-6 sm:p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#1f6b3a]" />
        <h3 className="mt-4 font-display font-bold text-3xl text-[#17201b]">Application received</h3>
        <p className="mt-3 text-gray-600 leading-relaxed max-w-xl mx-auto">
          Thank you. Your application has been sent to the Mulembe Community NSW team. One last step: pay your joining
          contribution. Your membership starts once your payment is received.
        </p>
        <div className="mx-auto mt-8 max-w-sm rounded-2xl bg-[#f6f2ea] p-5 text-left">
          <div className="flex justify-between py-1.5 text-[#17201b]"><span>Community registration fee</span><span>${COMMUNITY_REGISTRATION_FEE}</span></div>
          <div className="flex justify-between py-1.5 text-[#17201b]"><span>Welfare contribution</span><span>${WELFARE_CONTRIBUTION}</span></div>
          <div className="mt-2 flex justify-between border-t border-[#d9d3c6] pt-3 font-bold text-[#0f2c20]"><span>Total (AUD)</span><span>${JOINING_TOTAL}</span></div>
        </div>
        {WELFARE_JOINING_PAYMENT_URL ? (
          <>
            <a
              href={WELFARE_JOINING_PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e0b75a] px-8 font-bold text-[#0f2c20] hover:bg-[#ebc774] transition"
            >
              Pay ${JOINING_TOTAL} now <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-gray-500"><Lock className="w-3.5 h-3.5" /> Secure checkout powered by Stripe</p>
          </>
        ) : (
          <p className="mt-6 text-sm text-gray-600">The committee will send you a secure payment link shortly.</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      <FormSection step={1} title="Your details">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className={labelClass}>First / given name *</Label>
            <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required className={inputClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="middleName" className={labelClass}>Middle name</Label>
            <Input id="middleName" name="middleName" value={formData.middleName} onChange={handleInputChange} className={inputClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="surname" className={labelClass}>Surname / family name *</Label>
            <Input id="surname" name="surname" value={formData.surname} onChange={handleInputChange} required className={inputClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className={labelClass}>Email *</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className={inputClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className={labelClass}>Phone *</Label>
            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+61 ..." required className={inputClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="street" className={labelClass}>Street address *</Label>
            <Input id="street" name="street" value={formData.street} onChange={handleInputChange} required className={inputClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="suburb" className={labelClass}>Suburb / town *</Label>
            <Input id="suburb" name="suburb" value={formData.suburb} onChange={handleInputChange} required className={inputClass} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="state" className={labelClass}>State *</Label>
              <Input id="state" name="state" value={formData.state} onChange={handleInputChange} required className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postcode" className={labelClass}>Postcode *</Label>
              <Input id="postcode" name="postcode" value={formData.postcode} onChange={handleInputChange} required className={inputClass} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="country" className={labelClass}>Country *</Label>
            <Input id="country" name="country" value={formData.country} onChange={handleInputChange} required className={inputClass} />
          </div>
        </div>
      </FormSection>

      <FormSection
        step={2}
        title="Next of kin"
        description="If neither of your biological parents is available, the payout goes to the next of kin you name here."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nok-firstName" className={labelClass}>First / given name</Label>
            <Input id="nok-firstName" value={formData.nextOfKin.firstName} onChange={(e) => handleNextOfKinChange("firstName", e.target.value)} className={inputClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nok-middleName" className={labelClass}>Middle name</Label>
            <Input id="nok-middleName" value={formData.nextOfKin.middleName} onChange={(e) => handleNextOfKinChange("middleName", e.target.value)} className={inputClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nok-surname" className={labelClass}>Surname / family name</Label>
            <Input id="nok-surname" value={formData.nextOfKin.surname} onChange={(e) => handleNextOfKinChange("surname", e.target.value)} className={inputClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nok-phone" className={labelClass}>Phone</Label>
            <Input id="nok-phone" type="tel" value={formData.nextOfKin.phone} onChange={(e) => handleNextOfKinChange("phone", e.target.value)} placeholder="+61 ..." className={inputClass} />
          </div>
        </div>
      </FormSection>

      <FormSection
        step={3}
        title="Beneficiaries"
        description={
          <>
            <p>Only these family members can be beneficiaries, and the rules cannot be changed for individual cases:</p>
            <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-5">
              <li>Your biological father and mother (primary beneficiaries)</li>
              <li>A stepparent or legal guardian, if the relationship began before you turned 17</li>
              <li>Your spouse</li>
              <li>Your children</li>
              <li>Brothers and sisters who share your biological mother</li>
            </ul>
          </>
        }
      >
        <div className="space-y-4">
          {formData.beneficiaries.slice(0, beneficiaryCount).map((beneficiary, index) => (
            <div key={index} className="rounded-2xl bg-[#f6f2ea] p-4 sm:p-5">
              <div className="mb-3 text-xs font-bold tracking-[0.15em] text-[#0f2c20]">BENEFICIARY {index + 1}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`ben-${index}-firstName`} className={labelClass}>First name</Label>
                  <Input id={`ben-${index}-firstName`} value={beneficiary.firstName} onChange={(e) => handleBeneficiaryChange(index, 'firstName', e.target.value)} className={inputClass} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`ben-${index}-middleName`} className={labelClass}>Middle name</Label>
                  <Input id={`ben-${index}-middleName`} value={beneficiary.middleName} onChange={(e) => handleBeneficiaryChange(index, 'middleName', e.target.value)} className={inputClass} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`ben-${index}-surname`} className={labelClass}>Surname</Label>
                  <Input id={`ben-${index}-surname`} value={beneficiary.surname} onChange={(e) => handleBeneficiaryChange(index, 'surname', e.target.value)} className={inputClass} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`ben-${index}-phone`} className={labelClass}>Phone</Label>
                  <Input id={`ben-${index}-phone`} type="tel" value={beneficiary.phone} onChange={(e) => handleBeneficiaryChange(index, 'phone', e.target.value)} placeholder="+61 ..." className={inputClass} />
                </div>
                <div className="space-y-2">
                  <Label className={labelClass}>Relationship</Label>
                  <Select value={beneficiary.relationship} onValueChange={(value) => handleBeneficiaryChange(index, 'relationship', value)}>
                    <SelectTrigger aria-label={`Beneficiary ${index + 1} relationship`} className={inputClass}>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {BENEFICIARY_RELATIONSHIPS.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          ))}
          {beneficiaryCount < BENEFICIARY_COUNT && (
            <button
              type="button"
              onClick={() => setBeneficiaryCount((n) => n + 1)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border-[1.5px] border-dashed border-[#0f2c20]/40 px-5 text-sm font-semibold text-[#0f2c20] hover:border-[#0f2c20] transition"
            >
              <Plus className="w-4 h-4" /> Add another beneficiary
              <span className="font-normal text-gray-500">({beneficiaryCount} of {BENEFICIARY_COUNT})</span>
            </button>
          )}
        </div>
      </FormSection>

      <FormSection step={4} title="Signature" description="Sign with your finger or mouse in the box below.">
        <canvas
          ref={signatureRef}
          width={800}
          height={200}
          aria-label="Signature pad"
          className="w-full rounded-2xl border-2 border-dashed border-[#d9d3c6] bg-[#fbfaf7] touch-none"
          style={{ minHeight: '150px', maxHeight: '200px' }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawingTouch}
          onTouchMove={drawTouch}
          onTouchEnd={stopDrawingTouch}
        />
        <div className="mt-3 flex gap-2">
          <button type="button" onClick={undoSignature} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d9d3c6] px-5 text-sm font-semibold text-[#0f2c20] hover:border-[#0f2c20] transition">
            <Undo2 className="w-4 h-4" /> Undo
          </button>
          <button type="button" onClick={clearSignature} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d9d3c6] px-5 text-sm font-semibold text-[#0f2c20] hover:border-[#0f2c20] transition">
            <Eraser className="w-4 h-4" /> Clear
          </button>
        </div>
      </FormSection>

      <FormSection step={5} title="Declarations">
        <div className="space-y-3">
          <label htmlFor="constitutionConsent" className="flex items-start gap-3 rounded-2xl bg-[#f6f2ea] p-4 text-sm sm:text-base text-[#17201b] cursor-pointer">
            <input
              type="checkbox"
              id="constitutionConsent"
              checked={formData.constitutionConsent}
              onChange={(e) => handleCheckboxChange('constitutionConsent', e.target.checked)}
              className="mt-1 h-4 w-4 accent-[#0f2c20]"
              required
            />
            I confirm I have read and understood the Welfare Constitution and agree to abide by it.
          </label>
          <label htmlFor="privacyConsent" className="flex items-start gap-3 rounded-2xl bg-[#f6f2ea] p-4 text-sm sm:text-base text-[#17201b] cursor-pointer">
            <input
              type="checkbox"
              id="privacyConsent"
              checked={formData.privacyConsent}
              onChange={(e) => handleCheckboxChange('privacyConsent', e.target.checked)}
              className="mt-1 h-4 w-4 accent-[#0f2c20]"
              required
            />
            I consent to my personal information being collected, stored, and used for membership administration in accordance with the Privacy Notice below.
          </label>
        </div>
        <div className="mt-5 rounded-2xl border border-[#e5e1d8] p-4 text-sm text-gray-600 leading-relaxed">
          <span className="font-semibold text-[#17201b]">Privacy notice. </span>
          The Association collects personal information to administer membership and welfare beneficiary records.
          Your data will be stored securely and only used for lawful purposes related to the Association's functions.
          You may request access to, or correction of, your information by contacting the Secretary.
        </div>
      </FormSection>

      <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end pt-2 print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-[1.5px] border-[#0f2c20]/30 bg-white px-7 font-semibold text-[#0f2c20] hover:border-[#0f2c20] transition"
        >
          <Printer className="w-4 h-4" /> Print / Save as PDF
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0f2c20] px-8 font-bold text-white hover:bg-[#1a4332] disabled:opacity-60 transition"
        >
          {isSubmitting ? "Submitting…" : "Submit application"}
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

export default WelfareApplicationForm;
