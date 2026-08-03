const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/LanguageContext";

export default function ProductEnquiry() {
  const { t } = useLang();
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    full_name: "", email: "", phone: "", company: "", product: "", reason: "", message: "",
  });

  const REASONS = [
    { value: "Request Demo", label: t('enquiry.reasonDemo') },
    { value: "Pricing", label: t('enquiry.reasonPricing') },
    { value: "Partnership", label: t('enquiry.reasonPartnership') },
    { value: "Enterprise Deployment", label: t('enquiry.reasonEnterprise') },
    { value: "General Enquiry", label: t('enquiry.reasonGeneral') },
  ];

  useEffect(() => {
    if (location.state?.product) {
      setForm(prev => ({ ...prev, product: location.state.product }));
    }
  }, [location.state]);

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.phone || !form.reason || !form.message) {
      toast({ title: t('enquiry.validationError'), variant: "destructive" });
      return;
    }
    if (!form.product) {
      toast({ title: t('enquiry.validationError'), variant: "destructive" });
      return;
    }
    setSubmitting(true);

    const company = form.company || "Not provided";

    const reasonMap = {
      "CorPool Demo Request": "I would like to know more about CorPool.",
      "Interview AI Demo": "I would like to know more about Interview AI.",
      "MockPrep.ai Access": "I would like to know more about MockPrep.ai.",
      "Careers": "I would like to know more about career opportunities at SuPrazo.",
      "Partnership / Sponsorship": "I would like to discuss a partnership opportunity.",
    };

    const interestLine = reasonMap[form.reason] || `I am interested in ${form.reason}.`;

    const message = `Hello SuPrazo Team,

I contacted you through the SuPrazo Technologies website.

I am interested in:
${form.product}

--------------------------------

Name:
${form.full_name}

Email:
${form.email}

Phone:
${form.phone}

Company:
${company}

Reason:
${form.reason}

Message:
${form.message}

--------------------------------

Looking forward to your response.

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919665658240?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setSubmitted(true);
      setSubmitting(false);
      setForm({ full_name: "", email: "", phone: "", company: "", product: form.product, reason: "", message: "" });
    }, 800);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
          <CheckCircle size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold text-navy mb-4">{t('enquiry.submitted')}</h2>
          <p className="text-navy/60 mb-8">{t('enquiry.thanks')}</p>
          <Link to="/products" className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wide uppercase"><ArrowLeft size={16} /> {t('enquiry.back')}</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 sm:pt-20 pb-20 md:pb-28" data-aos="fade-up">
      <div className="max-w-[800px] mx-auto px-6 lg:px-16 py-12 md:py-16">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-navy/50 text-sm mb-8 hover:text-gold transition-colors"><ArrowLeft size={16} /> {t('enquiry.back')}</button>
        <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase block mb-4">{t('enquiry.label')}</span>
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-2">{t('enquiry.title')}</h1>
        <div className="gold-line w-16 mt-4 mb-10" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label={`${t('enquiry.fullName')} *`} value={form.full_name} onChange={v => handleChange("full_name", v)} />
            <Field label={`${t('enquiry.email')} *`} type="email" value={form.email} onChange={v => handleChange("email", v)} />
          </div>
          <Field label={`${t('enquiry.phone')} *`} type="tel" value={form.phone} onChange={v => handleChange("phone", v)} />
          <Field label={t('enquiry.company')} value={form.company} onChange={v => handleChange("company", v)} />
          <div>
            <label className="text-xs font-semibold text-navy/70 tracking-wide uppercase block mb-2">{t('enquiry.product')} *</label>
            <input type="text" value={form.product} readOnly className="w-full border border-gray-200 rounded-lg p-4 text-sm text-navy/60 bg-gray-50 outline-none cursor-not-allowed" />
          </div>
          <SelectField label={`${t('enquiry.reason')} *`} value={form.reason} onChange={v => handleChange("reason", v)} options={REASONS} placeholder={t('enquiry.reasonSelect')} />
          <div>
            <label className="text-xs font-semibold text-navy/70 tracking-wide uppercase block mb-2">{`${t('enquiry.message')} *`}</label>
            <textarea value={form.message} onChange={e => handleChange("message", e.target.value)} rows={5} className="w-full border border-gray-200 rounded-lg p-4 text-sm text-navy outline-none focus:border-gold transition-colors resize-none" placeholder={t('enquiry.messagePlaceholder')} />
          </div>
          <button type="submit" disabled={submitting} className="bg-navy text-white px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-navy/90 hover:-translate-y-0.5 transition-all duration-300 rounded disabled:opacity-50 mt-4">{submitting ? t('enquiry.sending') : t('enquiry.submit')}</button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="text-xs font-semibold text-navy/70 tracking-wide uppercase block mb-2">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} className="w-full border border-gray-200 rounded-lg p-4 text-sm text-navy outline-none focus:border-gold transition-colors" />
    </div>
  );
}

function SelectField({ label, value, onChange, options, placeholder }) {
  return (
    <div>
      <label className="text-xs font-semibold text-navy/70 tracking-wide uppercase block mb-2">{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)} className="w-full border border-gray-200 rounded-lg p-4 text-sm text-navy outline-none focus:border-gold transition-colors bg-white">
        <option value="">{placeholder}</option>
        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
    </div>
  );
}
