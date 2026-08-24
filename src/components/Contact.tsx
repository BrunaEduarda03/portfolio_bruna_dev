import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../data/mock";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle2,
  Linkedin,
  Github,
} from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "../hooks/use-toast";
import { Toaster } from "./ui/toaster";
import { trackEvent } from "../lib/analytics";

const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_NOTIFY = process.env.REACT_APP_EMAILJS_TEMPLATE_NOTIFY!;
const EMAILJS_TEMPLATE_CONFIRM = process.env.REACT_APP_EMAILJS_TEMPLATE_CONFIRM!;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t("contact.requiredFields"),
        description: t("contact.requiredFieldsDesc"),
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || t("contact.defaultSubject"),
        message: formData.message,
        to_email: "brunaecmaciel@gmail.com",
        reply_to: formData.email,
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_NOTIFY, templateParams);

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CONFIRM, {
        ...templateParams,
        to_name: formData.name,
      });

      setIsSubmitted(true);
      trackEvent("contact_form_submit");
      toast({
        title: t("contact.successTitle"),
        description: t("contact.successDesc"),
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error: unknown) {
      console.error("EmailJS error:", error);
      const errMsg = error instanceof Error ? error.message : String((error as { text?: string })?.text ?? error);
      trackEvent("contact_form_error");
      toast({
        title: t("contact.errorTitle"),
        description: errMsg || t("contact.errorDesc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-amber-500 font-mono text-sm">
              {t("contact.sectionNum")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
              {t("contact.title")}
            </h2>
            <div className="flex-1 min-w-[2rem] h-[1px] bg-zinc-800 ml-4" />
          </div>
          <p className="text-zinc-500 text-sm max-w-lg">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 space-y-7">
              <h3 className="font-mono text-sm text-amber-400 uppercase tracking-wider mb-10">
                {t("contact.info")}
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-1">
                    {t("contact.email")}
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-zinc-300 hover:text-amber-400 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-1">
                    {t("contact.phone")}
                  </p>
                  <span className="text-sm text-zinc-300">
                    {personalInfo.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-1">
                    {t("contact.locationLabel")}
                  </p>
                  <span className="text-sm text-zinc-300">
                    {t("about.location")}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-1">
                    {t("contact.linkedinLabel")}
                  </p>
                  <span className="text-sm text-zinc-300">
                    {personalInfo.linkedin}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Github className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-1">
                    {t("contact.githubLabel")}
                  </p>
                  <span className="text-sm text-zinc-300">
                    {personalInfo.github}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    {t("contact.nameLabel")} *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.namePlaceholder")}
                    className="bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-700 focus:border-amber-500/40 focus:ring-amber-500/20 h-11"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    {t("contact.emailLabel")} *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.emailPlaceholder")}
                    className="bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-700 focus:border-amber-500/40 focus:ring-amber-500/20 h-11"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                  {t("contact.subjectLabel")}
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("contact.subjectPlaceholder")}
                  className="bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-700 focus:border-amber-500/40 focus:ring-amber-500/20 h-11"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                  {t("contact.messageLabel")} *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.messagePlaceholder")}
                  rows={5}
                  className="bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-700 focus:border-amber-500/40 focus:ring-amber-500/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-zinc-900 font-mono font-semibold text-sm tracking-wider transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t("contact.sending")}
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    {t("contact.sent")}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    {t("contact.send")}
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
