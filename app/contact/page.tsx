"use client";

import { useState, useRef } from "react";
import { Phone, Mail, MapPin, Send, Paperclip } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }, 1800);
  }

  const contactItems = [
    { icon: Phone, label: "PHONE", value: "+91 9217966917", href: "tel:+919217966917" },
    { icon: Mail,  label: "EMAIL", value: "support@smpyi.com", href: "mailto:support@smpyi.com" },
    { icon: MapPin,label: "ADDRESS", value: "New Delhi, India", href: "#" },
  ];

  return (
    <div className="relative bg-[#F0F4FA] dark:bg-[#060F1E] overflow-hidden">

      {/* ── Background decorative elements ── */}
      {/* Top-right large blob */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-30 dark:opacity-20"
        style={{ background: "radial-gradient(circle, #BFDBFE 0%, transparent 70%)" }}
      />
      {/* Bottom-left blob */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-25 dark:opacity-15"
        style={{ background: "radial-gradient(circle, #93C5FD 0%, transparent 70%)" }}
      />
      {/* Mid orange accent */}
      <div
        className="pointer-events-none absolute top-1/2 left-[15%] w-48 h-48 rounded-full opacity-20 dark:opacity-10"
        style={{ background: "radial-gradient(circle, #FED7AA 0%, transparent 70%)" }}
      />
      {/* Dot grid — top left */}
      <svg className="pointer-events-none absolute top-10 left-10 opacity-[0.07] dark:opacity-[0.05]" width="160" height="140" viewBox="0 0 160 140">
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 22 + 6} cy={r * 22 + 6} r="2.5" fill="#2563EB" />
          ))
        )}
      </svg>
      {/* Dot grid — bottom right */}
      <svg className="pointer-events-none absolute bottom-10 right-10 opacity-[0.07] dark:opacity-[0.05]" width="160" height="140" viewBox="0 0 160 140">
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 22 + 6} cy={r * 22 + 6} r="2.5" fill="#F97316" />
          ))
        )}
      </svg>


      {/* ── Page content ── */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Section label + heading */}
        <div className="mb-12">
          <span className="inline-block border-[1.5px] border-[#F97316] text-[#F97316] rounded-full px-4 py-1 text-xs font-semibold mb-4 tracking-wide uppercase">
            Contact Us
          </span>
          <h1
            className="font-poppins font-bold text-[#0F172A] dark:text-white leading-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
          >
            Get in{" "}
            <span className="text-[#2563EB]">Touch</span>
          </h1>
          <p className="text-[#475569] dark:text-white/65 text-[15px] mt-3 max-w-[380px] leading-relaxed">
            Have a question or want to work together? Drop us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* LEFT — contact info */}
          <div className="flex flex-col gap-5 lg:w-[38%] w-full">

            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-[#1F2937] rounded-xl px-6 py-5 shadow-sm hover:border-[#2563EB] hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#EEF3FA] dark:bg-[#1E2744] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/10 transition-colors duration-200">
                  <Icon size={20} className="text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#94A3B8] tracking-widest uppercase mb-0.5">{label}</p>
                  <p className="text-[14px] font-medium text-[#1E222F] dark:text-white">{value}</p>
                </div>
              </a>
            ))}

            {/* Map embed placeholder */}
            <div className="relative w-full overflow-hidden rounded-xl border border-[#E5E7EB] dark:border-[#1F2937] shadow-sm" style={{ height: "200px" }}>
              <iframe
                title="Smpyi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT — contact form */}
          <div className="flex-1 bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-[#1F2937] rounded-2xl shadow-sm p-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {/* Full Name */}
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] dark:text-white/70 mb-1.5">Full Name</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-[#E5E7EB] dark:border-[#2D3748] bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E222F] dark:text-white placeholder-[#94A3B8] text-[13px] px-4 py-3 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] dark:text-white/70 mb-1.5">Email Address</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  type="email"
                  className="w-full rounded-lg border border-[#E5E7EB] dark:border-[#2D3748] bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E222F] dark:text-white placeholder-[#94A3B8] text-[13px] px-4 py-3 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                />
              </div>
              {/* Phone */}
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] dark:text-white/70 mb-1.5">Phone Number</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="9999999999"
                  type="tel"
                  className="w-full rounded-lg border border-[#E5E7EB] dark:border-[#2D3748] bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E222F] dark:text-white placeholder-[#94A3B8] text-[13px] px-4 py-3 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                />
              </div>
              {/* Subject */}
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] dark:text-white/70 mb-1.5">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Partnership Inquiry"
                  className="w-full rounded-lg border border-[#E5E7EB] dark:border-[#2D3748] bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E222F] dark:text-white placeholder-[#94A3B8] text-[13px] px-4 py-3 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-5">
              <label className="block text-[12px] font-semibold text-[#374151] dark:text-white/70 mb-1.5">Your Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                rows={5}
                className="w-full rounded-lg border border-[#E5E7EB] dark:border-[#2D3748] bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E222F] dark:text-white placeholder-[#94A3B8] text-[13px] px-4 py-3 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200 resize-none"
              />
            </div>

            {/* File attach */}
            <div className="mb-5">
              <input ref={fileRef} type="file" className="hidden" onChange={handleFile} accept=".pdf,.doc,.docx,.png,.jpg" />
              <button
                onClick={() => fileRef.current?.click()}
                className="w-full flex items-center justify-center gap-2 rounded-lg border border-dashed border-[#CBD5E1] dark:border-[#2D3748] bg-[#F8FAFC] dark:bg-[#0F172A] text-[#2563EB] text-[13px] font-medium py-3 hover:border-[#2563EB] hover:bg-[#EEF3FA] dark:hover:bg-[#1E2744] transition-all duration-200"
              >
                <Paperclip size={15} />
                {file ? file.name : "Attach a file (Max 5MB)"}
              </button>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={sending || sent}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-80 text-white font-poppins font-semibold text-[14px] py-3.5 transition-all duration-200"
            >
              {sent ? (
                "✓ Message Sent!"
              ) : sending ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}