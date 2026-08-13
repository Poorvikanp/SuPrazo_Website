const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Upload, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/LanguageContext";
import { buildMailtoLink, openMailtoLink } from "@/lib/utils";

export default function CareersApply() {
  const { t } = useLang();
  const { toast } = useToast();
  const location = useLocation();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    full_name: "", email: "", phone: "", role: "", vertical: "", college: "",
    linkedin_url: "", resume_url: "", why_join: "", availability: "", how_heard: "",
  });

  const ROLES_LIST = [
    { value: t('careers.role1'), label: t('careers.role1') },
    { value: t('careers.role2'), label: t('careers.role2') },
    { value: t('careers.role3'), label: t('careers.role3') },
    { value: t('careers.role4'), label: t('careers.role4') },
    { value: t('apply.roleOther'), label: t('apply.roleOther') },
  ];

  const VERTICALS = [
    { value: "SuPrazo Technologies", label: t('ecosystem.suprazo') },
    { value: "SuPrathon", label: t('ecosystem.suprathon') },
    { value: "CorPool", label: t('product.corpool') },
    { value: "General", label: t('common.general') },
  ];

  const AVAILABILITY = [
    { value: "Full-time", label: t('apply.fullTime') },
    { value: "Part-time", label: t('apply.partTime') },
    { value: "Internship", label: t('apply.internship') },
  ];

  useEffect(() => {
    if (location.state?.role) {
      setForm(prev => ({ ...prev, role: location.state.role }));
    }
  }, [location.state]);

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.role || !form.vertical || !form.why_join || !form.availability) {
      toast({ title: t('apply.validationError'), variant: "destructive" });
      return;
    }
    setSubmitting(true);

    const phone = form.phone || "Not provided";
    const portfolio = form.college || "Not provided";
    const linkedin = form.linkedin_url || "Not provided";

    const message = `Job Application

Name:
${form.full_name}

Email:
${form.email}

Phone:
${phone}

Location:
${portfolio}

Position:
${form.role}

Availability:
${form.availability}

LinkedIn:
${linkedin}

Resume:
(User will attach manually)

Message:
${form.why_join}

Thank you.`;

    const mailtoLink = buildMailtoLink({
      subject: `Job Application - ${form.full_name}`,
      body: message,
    });

    setTimeout(() => {
      openMailtoLink(mailtoLink);
      setSubmitted(true);
      setSubmitting(false);
      setForm({ full_name: "", email: "", phone: "", role: "", vertical: "", college: "", linkedin_url: "", resume_url: "", why_join: "", availability: "", how_heard: "" });
    }, 800);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
          <CheckCircle size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold text-navy mb-4">{t('apply.submitted')}</h2>
          <p className="text-navy/60 mb-8">{t('apply.thanks')}</p>
          <Link to="/careers" className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wide uppercase"><ArrowLeft size={16} /> {t('apply.back')}</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 sm:pt-20 pb-20 md:pb-28" data-aos="fade-up">
      <div className="max-w-[800px] mx-auto px-6 lg:px-16 py-12 md:py-16">
        <Link to="/careers" className="inline-flex items-center gap-2 text-navy/50 text-sm mb-8 hover:text-gold transition-colors"><ArrowLeft size={16} /> {t('apply.back')}</Link>
        <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase block mb-4">{t('apply.label')}</span>
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-2">{t('apply.title')}</h1>
        <div className="gold-line w-16 mt-4 mb-10" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label={`${t('apply.fullName')} *`} value={form.full_name} onChange={v => handleChange("full_name", v)} />
            <Field label={`${t('apply.email')} *`} type="email" value={form.email} onChange={v => handleChange("email", v)} />
          </div>
          <Field label={t('apply.phone')} value={form.phone} onChange={v => handleChange("phone", v)} />
          <SelectField label={`${t('apply.role')} *`} value={form.role} onChange={v => handleChange("role", v)} options={ROLES_LIST} placeholder={t('apply.select')} />
          <SelectField label={`${t('apply.vertical')} *`} value={form.vertical} onChange={v => handleChange("vertical", v)} options={VERTICALS} placeholder={t('apply.select')} />
          <Field label={t('apply.college')} value={form.college} onChange={v => handleChange("college", v)} />
          <Field label={t('apply.linkedin')} value={form.linkedin_url} onChange={v => handleChange("linkedin_url", v)} />

            <div>
              <label className="text-xs font-semibold text-navy/70 tracking-wide uppercase block mb-2">{t('apply.resume')}</label>
              <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                <label className="cursor-pointer inline-flex items-center gap-2 bg-alabaster px-4 py-2 rounded text-sm text-navy font-medium hover:bg-gray-100 transition-colors">
                  <Upload size={16} /> {uploading ? t('apply.uploading') : t('apply.chooseFile')}
                  <input type="file" accept=".pdf" className="hidden" onChange={handleFileUpload} disabled={uploading} />
                </label>
                {form.resume_url && <span className="text-xs text-green-600">{t('apply.uploaded')}</span>}
              </div>
               <p className="text-xs text-navy/50 mt-2">Your resume cannot be attached automatically. Please attach it manually after your email client opens.</p>
            </div>

          <div>
            <label className="text-xs font-semibold text-navy/70 tracking-wide uppercase block mb-2">{`${t('apply.why')} *`}</label>
            <textarea value={form.why_join} onChange={e => handleChange("why_join", e.target.value)} rows={4} className="w-full border border-gray-200 rounded-lg p-4 text-sm text-navy outline-none focus:border-gold transition-colors resize-none" placeholder={t('apply.whyPlaceholder')} />
          </div>

          <SelectField label={`${t('apply.availability')} *`} value={form.availability} onChange={v => handleChange("availability", v)} options={AVAILABILITY} placeholder={t('apply.select')} />
          <Field label={t('apply.howHeard')} value={form.how_heard} onChange={v => handleChange("how_heard", v)} />

          <button type="submit" disabled={submitting} className="bg-navy text-white px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-navy/90 transition-all duration-300 rounded disabled:opacity-50 mt-4">{submitting ? t('apply.submitting') : t('apply.submit')}</button>
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