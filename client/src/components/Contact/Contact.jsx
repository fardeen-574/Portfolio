import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import SectionWrapper from '../common/SectionWrapper';
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin, Twitter } from 'lucide-react';
import axios from 'axios';

// ─── Replace these with your EmailJS credentials ──────────────────────────────
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
// ─────────────────────────────────────────────────────────────────────────────

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'shaiksami1993@email.com', href: 'mailto:shaiksami1993@email.com', color: 'text-primary-400' },
  { icon: Phone, label: 'Phone', value: '+91 7075889241', href: 'tel:+91 7075889241', color: 'text-accent-400' },
  { icon: MapPin, label: 'Location', value: 'Hyderabad, India', href: '#', color: 'text-pink-400' },
];

const socials = [
  { icon: Github, href: 'https://github.com/fardeen-574', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/fardeen-sami-shaik', label: 'LinkedIn' },

];

const InputField = ({ label, type = 'text', name, value, onChange, required, rows }) => {
  const baseClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500/60 focus:bg-white/8 transition-all duration-200';

  return (
    <div>
      <label className="block text-slate-400 text-sm mb-2">
        {label} {required && <span className="text-primary-400">*</span>}
      </label>
      {rows ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          required={required}
          placeholder={`Your ${label.toLowerCase()}...`}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={`Your ${label.toLowerCase()}...`}
          className={baseClass}
        />
      )}
    </div>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      // 1. Send via EmailJS (HR gets the email immediately)
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      // 2. Save to MongoDB (optional backup)
      try {
        await axios.post('/api/contact', form);
      } catch {
        // DB save fails silently – EmailJS already sent
      }

      toast.success('🎉 Message sent! I\'ll get back to you soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      {/* Separator */}
      <div className="flex items-center gap-4 mb-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="text-center mb-16">
        <p className="section-subheading">Get In Touch</p>
        <h2 className="section-heading">
          Contact <span className="gradient-text">Me</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          I'm currently open to full-time opportunities. Whether you have a project in mind or
          just want to say hi, my inbox is always open!
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left: Info panel */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
            <a
              key={label}
              href={href}
              className="card-glass p-5 flex items-center gap-4 group"
            >
              <div className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                <Icon size={18} />
              </div>
              <div>
                <p className="text-slate-500 text-xs">{label}</p>
                <p className="text-white text-sm font-medium">{value}</p>
              </div>
            </a>
          ))}

          {/* Social */}
          <div className="card-glass p-5">
            <p className="text-slate-500 text-xs mb-4">Find me on</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500/40 hover:bg-primary-600/10 transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Availability card */}
          <div className="card-glass p-5 border-accent-500/20" style={{ borderColor: 'rgba(16,185,129,0.2)' }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="glow-dot" />
              <span className="text-accent-400 text-sm font-semibold">Available for work</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              I'm actively looking for full-time or internship opportunities in Full Stack / MERN development.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-3">
          <div className="card-glass p-8">
            <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField label="Name" name="name" value={form.name} onChange={handleChange} required />
                <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
              <InputField label="Subject" name="subject" value={form.subject} onChange={handleChange} required />
              <InputField label="Message" name="message" value={form.message} onChange={handleChange} required rows={5} />

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
