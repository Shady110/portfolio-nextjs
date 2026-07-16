'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL: FormState = { name: '', email: '', subject: '', message: '' };
type Status = 'idle' | 'loading' | 'success';

const fieldBase =
  'w-full rounded-[9px] bg-white border border-[rgba(24,38,26,0.08)] px-3.5 py-2.5 text-[0.9375rem] text-[#0D0D0D] ' +
  'placeholder:text-[rgba(13,13,13,0.32)] outline-none transition-colors ' +
  'hover:border-[#80A689] focus:border-[#18261A] focus:ring-2 focus:ring-[#BDF2CA]/50';

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.75rem] font-medium text-[#3a5c3e]">{label}</span>
      {children}
    </label>
  );
}

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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
            <h3 className="text-[1rem] font-semibold text-[#0D0D0D] mb-1">{t('successTitle')}</h3>
            <p className="text-[0.875rem] text-[#3a5c3e] leading-relaxed">{t('successBody')}</p>
          </div>
          <button
            onClick={() => setStatus('idle')}
            className="text-[0.8125rem] text-[#80A689] hover:text-[#3a5c3e] transition-colors"
          >
            {t('sendAnother')}
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
            <Field label={t('name')}>
              <input
                name="name" value={form.name} onChange={handleChange} required
                autoComplete="name" placeholder={t('namePlaceholder')} className={fieldBase}
              />
            </Field>
            <Field label={t('email')}>
              <input
                type="email" name="email" value={form.email} onChange={handleChange} required
                autoComplete="email" placeholder={t('emailPlaceholder')} className={`latin ${fieldBase}`} dir="ltr"
              />
            </Field>
          </div>

          <Field label={t('subject')}>
            <input
              name="subject" value={form.subject} onChange={handleChange} required
              placeholder={t('subjectPlaceholder')} className={fieldBase}
            />
          </Field>

          <Field label={t('message')}>
            <textarea
              name="message" value={form.message} onChange={handleChange} required rows={5}
              placeholder={t('messagePlaceholder')} className={`${fieldBase} resize-y min-h-[120px]`}
            />
          </Field>

          <div className="flex items-center justify-between gap-4 pt-1">
            <p className="text-[0.75rem] text-[#80A689]">
              {t('responseTime')}{' '}
              <span className="text-[#3a5c3e] font-medium">{t('responseWindow')}</span>
            </p>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="min-w-[130px] px-5 py-2.5 rounded-[9px] text-[0.875rem] font-medium text-white bg-[#18261A]
                         hover:bg-[#243d27] active:scale-[0.98] transition-all shadow-sm shadow-[rgba(24,38,26,0.2)]
                         disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t('sending')}
                </span>
              ) : t('send')}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
