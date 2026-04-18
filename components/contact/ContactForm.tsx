'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextField, Button } from '@mui/material';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL: FormState = { name: '', email: '', subject: '', message: '' };
type Status = 'idle' | 'loading' | 'success';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Replace with your actual endpoint (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    setForm(INITIAL);
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="surface-card p-10 text-center flex flex-col items-center gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#BDF2CA]/50 border border-[rgba(24,38,26,0.15)] flex items-center justify-center">
            <svg className="w-6 h-6 text-[#18261A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-[1rem] font-semibold text-[#0D0D0D] mb-1">Message received.</h3>
            <p className="text-[0.875rem] text-[#3a5c3e] leading-relaxed">
              Thanks for reaching out. I review every message personally and respond within 24–48 hours.
            </p>
          </div>
          <button
            onClick={() => setStatus('idle')}
            className="text-[0.8125rem] text-[#80A689] hover:text-[#3a5c3e] transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="surface-card p-6 md:p-8 flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextField label="Full name" name="name" value={form.name}
              onChange={handleChange} required fullWidth
              inputProps={{ autoComplete: 'name', placeholder: 'Alex Johnson' }} />
            <TextField label="Email" name="email" type="email" value={form.email}
              onChange={handleChange} required fullWidth
              inputProps={{ autoComplete: 'email', placeholder: 'alex@company.com' }} />
          </div>

          <TextField label="Subject" name="subject" value={form.subject}
            onChange={handleChange} required fullWidth
            inputProps={{ placeholder: 'Project enquiry / Collaboration / Full-time role' }} />

          <TextField label="Message" name="message" value={form.message}
            onChange={handleChange} required fullWidth multiline rows={5}
            inputProps={{ placeholder: "Tell me about your project, timeline, and what you're looking for..." }} />

          <div className="flex items-center justify-between gap-4 pt-1">
            <p className="text-[0.75rem] text-[#80A689]">
              Response within <span className="text-[#3a5c3e] font-medium">24–48 hours</span>
            </p>
            <Button type="submit" variant="contained" disabled={status === 'loading'} sx={{ minWidth: 130 }}>
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending…
                </span>
              ) : 'Send Message'}
            </Button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
