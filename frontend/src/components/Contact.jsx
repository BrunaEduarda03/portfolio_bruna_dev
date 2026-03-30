import React, { useState } from 'react';
import { personalInfo } from '../data/mock';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle2 } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from '../hooks/use-toast';
import { Toaster } from './ui/toaster';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Por favor, preencha todos os campos obrigatórios.',
        variant: 'destructive',
      });
      return;
    }
    setIsSubmitting(true);
    // MOCK: Simulating email send - will integrate with EmailJS or backend later
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('MOCK: Contact form submitted', formData);
    // Save to localStorage as mock
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    submissions.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('contact_submissions', JSON.stringify(submissions));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Mensagem enviada!',
      description: 'Obrigada pelo contacto. Responderei em breve!',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-amber-500 font-mono text-sm">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">Contacto</h2>
            <div className="flex-1 h-[1px] bg-zinc-800 ml-4" />
          </div>
          <p className="text-zinc-500 text-sm max-w-lg">
            Interessado(a) em colaborar? Envie uma mensagem e responderei o mais breve possível.
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
            <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 space-y-5">
              <h3 className="font-mono text-sm text-amber-400 uppercase tracking-wider">Informações</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-1">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm text-zinc-300 hover:text-amber-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-1">Telefone</p>
                  <span className="text-sm text-zinc-300">{personalInfo.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-1">Localização</p>
                  <span className="text-sm text-zinc-300">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/20">
              <p className="text-xs text-zinc-500 font-mono mb-3 uppercase tracking-wider">Nota</p>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Este formulário está a funcionar com <span className="text-amber-500/70">dados mock</span> (localStorage). A integração com EmailJS ou backend será feita posteriormente.
              </p>
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
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Nome *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="O teu nome"
                    className="bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-700 focus:border-amber-500/40 focus:ring-amber-500/20 h-11"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@exemplo.com"
                    className="bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-700 focus:border-amber-500/40 focus:ring-amber-500/20 h-11"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Assunto</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem"
                  className="bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-700 focus:border-amber-500/40 focus:ring-amber-500/20 h-11"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Mensagem *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escreve a tua mensagem aqui..."
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
                    A enviar...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Enviado!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
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
