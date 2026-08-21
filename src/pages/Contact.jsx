const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }), SendEmail: async (params) => { console.warn("SendEmail fallback stub called", params); return { success: true }; } } } };

import React, { useState } from "react";
import { motion } from "framer-motion";

import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, CheckCircle, ArrowRight, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { buildMailtoLink } from "@/lib/utils";
import { useLang } from "@/lib/LanguageContext";
import OptimizedImage from "@/components/ui/OptimizedImage";

const SUPRAZO_ART = "/images/suprazo.jpg";

export default function Contact() {
  const { t } = useLang();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    full_name: "", email: "", phone: "", reason: "", company: "", message: "",
  });

  const REASONS = [
    { value: "General Enquiry", label: t('contact.reason1') },
    { value: "CorPool Demo Request", label: t('contact.reason2') },
    { value: "Interview AI Demo", label: t('contact.reason3') },
    { value: "MockPrep.ai Access", label: t('contact.reason4') },
    { value: "Partnership / Sponsorship", label: t('contact.reason5') },
    { value: "Careers", label: t('contact.reason6') },
    { value: "Foundation & CSR Collaboration", label: t('contact.reason7') },
    { value: "Media & Press", label: t('contact.reason8') },
    { value: "Investor Enquiry", label: t('contact.reason9') },
    { value: "Other", label: t('contact.reason10') },
  ];

  const CONTACTS = [
    { icon: Mail, label: "Email", value: "info@suprazotech.com", href: "mailto:info@suprazotech.com" },
    { icon: MapPin, label: t('contact.location'), value: t('contact.locationValue'), href: null },
  ];

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.reason || !form.message) {
      toast({ title: t('contact.validationError'), variant: "destructive" });
      return;
    }

    setSubmitting(true);

    const phone = form.phone || "Not provided";
    const company = form.company || "Not provided";

    const subject = `Website Enquiry - ${form.full_name}`;
    const body = `Hello SuPrazo Technologies Team,

I would like to get in touch regarding my enquiry.

Here are my details:

Name: ${form.full_name}
Email: ${form.email}
Phone: ${phone}
Company / Organisation: ${company}
Reason for Contact: ${form.reason}

Message:
${form.message}

Looking forward to your response.

Best regards,
${form.full_name}`;

    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|webOS/i.test(navigator.userAgent);

    if (isMobile) {
      const mailtoLink = buildMailtoLink({ recipient: "info@suprazotech.in", subject, body });
      window.location.href = mailtoLink;
    } else {
      const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent("info@suprazotech.in")}` +
        `&su=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    }

    setSubmitted(true);
    setSubmitting(false);
    setForm({ full_name: "", email: "", phone: "", reason: "", company: "", message: "" });
  };

   return (
     <div data-aos="fade-up">
       {/* Hero */}
      <section className="relative bg-alabaster py-20 md:py-28 lg:py-40">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <OptimizedImage src={SUPRAZO_ART} alt="SUPRAZO" className="w-full max-w-5xl mx-auto opacity-20" loading="lazy" decoding="async" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('contact.heroLabel')}</span>
             <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy mt-4 leading-tight">{t('contact.heroTitle')}</h1>
             <p className="text-navy/60 text-sm sm:text-base md:text-lg mt-4 max-w-lg">{t('contact.heroDesc')}</p>
            <div className="gold-line w-20 mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}               viewport={{ once: false }} transition={{ duration: 0.8 }}>
              <h3 className="font-display text-2xl font-semibold text-navy mb-6">{t('contact.directContact')}</h3>
              <div className="gold-line w-12 mb-8" />
              <div className="flex flex-col gap-6">
                {CONTACTS.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><c.icon size={16} className="text-gold" /></div>
                    <div>
                      <div className="text-xs text-navy/40 font-semibold tracking-wider uppercase">{c.label}</div>
                      {c.href ? <a href={c.href} className="text-sm text-navy hover:text-gold transition-colors">{c.value}</a> : <span className="text-sm text-navy">{c.value}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 rounded-lg overflow-hidden border border-gray-100">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.9637408055!2d78.87281859511697!3d21.16127456698255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="SuPrazo Office Location" />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}               viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-20">
                  <CheckCircle size={48} className="text-gold mx-auto mb-6" />
                  <h3 className="font-display text-2xl font-semibold text-navy mb-4">{t('contact.sent')}</h3>
                  <p className="text-navy/60">{t('contact.thanks')}</p>
                  <button onClick={() => { setSubmitted(false); setForm({ full_name: "", email: "", phone: "", reason: "", company: "", message: "" }); }} className="mt-6 text-gold text-sm font-semibold uppercase tracking-wide hover:text-gold/80 transition-colors">{t('contact.sendAnother')}</button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-semibold text-navy mb-6">{t('contact.formTitle')}</h3>
                  <div className="gold-line w-12 mb-8" />
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                       <FormField label={`${t('contact.fullName')} *`} value={form.full_name} onChange={v => handleChange("full_name", v)} />
                       <FormField label={`${t('contact.email')} *`} type="email" value={form.email} onChange={v => handleChange("email", v)} />
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                       <FormField label={t('contact.phone')} value={form.phone} onChange={v => handleChange("phone", v)} />
                       <FormField label={t('contact.company')} value={form.company} onChange={v => handleChange("company", v)} />
                     </div>
                     <div>
                       <label className="text-xs font-semibold text-navy/70 tracking-wide uppercase block mb-2">{`${t('contact.reason')} *`}</label>
                       <select value={form.reason} onChange={e => handleChange("reason", e.target.value)} className="w-full border border-gray-200 rounded-lg p-3 sm:p-4 text-sm text-navy outline-none focus:border-gold transition-colors bg-white min-h-[44px]">
                        <option value="">{t('contact.reasonSelect')}</option>
                        {REASONS.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                      </select>
                    </div>
                     <div>
                       <label className="text-xs font-semibold text-navy/70 tracking-wide uppercase block mb-2">{`${t('contact.message')} *`}</label>
                       <textarea value={form.message} onChange={e => handleChange("message", e.target.value)} rows={5} className="w-full border border-gray-200 rounded-lg p-3 sm:p-4 text-sm text-navy outline-none focus:border-gold transition-colors resize-none" placeholder={t('contact.messagePlaceholder')} />
                     </div>
                     <button type="submit" disabled={submitting} className="group inline-flex items-center justify-center gap-2 bg-gold text-white px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold tracking-wide uppercase hover:bg-gold/90 hover:-translate-y-0.5 transition-all duration-400 rounded premium-shadow disabled:opacity-50 disabled:hover:translate-y-0">{submitting ? t('contact.sending') : t('contact.send')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" /></button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 md:py-24 lg:py-20 bg-alabaster">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "SuPrazo",
                links: [
                  { name: "WhatsApp", href: "https://whatsapp.com/channel/0029VbBHbwbCnA81XNT1so1f", icon: MessageCircle, brandColor: "#25D366" },
                  { name: "Instagram", href: "https://www.instagram.com/suprazo.official/", icon: Instagram, brandColor: "#E4405F" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/company/suprazo-technologies/?viewAsMember=true", icon: Linkedin, brandColor: "#0A66C2" },
                ],
              },
              {
                title: "Team Sumit",
                links: [
                  { name: "Portfolio", href: "https://www.teamsumit.com", icon: ArrowRight, brandColor: "#6B7280" },
                  { name: "Instagram", href: "https://www.instagram.com/team_.sumit/", icon: Instagram, brandColor: "#E4405F" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/sumit-ceo/", icon: Linkedin, brandColor: "#0A66C2" },
                ],
              },
              {
                title: "SuPrathon",
                links: [
                  { name: "WhatsApp", href: "https://whatsapp.com/channel/0029Vb2gEz8EFeXtr0dSdA07", icon: MessageCircle, brandColor: "#25D366" },
                  { name: "Instagram", href: "https://www.instagram.com/suprathon/", icon: Instagram, brandColor: "#E4405F" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/company/suprathon-2k25/?viewAsMember=true", icon: Linkedin, brandColor: "#0A66C2" },
                ],
              },
            ].map((group, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}               viewport={{ once: false }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-white rounded-lg p-8 border border-gray-100">
                <h4 className="text-lg font-semibold text-navy mb-6">{group.title}</h4>
                <div className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="inline-flex items-center gap-3 text-sm text-navy/70 hover:text-white transition-all duration-300 rounded-lg px-3 py-2 -mx-3" onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = link.brandColor; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                      <link.icon size={16} className="shrink-0" /> {link.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="text-xs font-semibold text-navy/70 tracking-wide uppercase block mb-2">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} className="w-full border border-gray-200 rounded-lg p-4 text-sm text-navy outline-none focus:border-gold transition-colors" />
    </div>
  );
}
