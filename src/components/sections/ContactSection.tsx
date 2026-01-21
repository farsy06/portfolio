import { useState } from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Field,
  FieldLabel,
  FieldError,
} from '../ui/field';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Update document title for contact section
  useDocumentTitle({
    title: 'Contact - Farisya Fatanansyah',
    sectionId: 'contact'
  });

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  type FieldName = 'name' | 'email' | 'title' | 'message';

  const handleInputChange = (field: FieldName, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    // Clear previous submit status
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot field (spam protection)
    const honeypot = (e.target as HTMLFormElement).company?.value;
    if (honeypot) {
      // Silently ignore bot submissions
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', title: '', message: '' });
      return;
    }

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // EmailJS configuration - Replace with your actual credentials
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

        // Get current timestamp
        const currentTime = new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short'
        });

        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          title: formData.title || 'Portfolio Contact',
          message: formData.message,
          time: currentTime,  // <-- Hidden timestamp
          to_name: 'Farisya',
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', title: '', message: '' });
      } catch (error) {
        console.error('Error sending message:', error);
        setSubmitStatus({
          type: 'error',
          message: 'Sorry, there was an error sending your message. Please try again or contact me directly via email.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  // Pre-filled message for better UX
  const message = encodeURIComponent(
    "Hi Farisya, I found your portfolio and would like to connect."
  );

  // WhatsApp URL with proper formatting - ensure it starts with country code
  const cleanNumber = whatsappNumber ? whatsappNumber.replace(/\D/g, '') : '';
  const whatsappUrl = cleanNumber && cleanNumber.length >= 10
    ? `https://wa.me/${cleanNumber}?text=${message}`
    : null;

  const socialLinks = [
    { icon: <FaGithub className="w-6 h-6" />, url: 'https://github.com/farsy06', label: 'GitHub' },
    { icon: <FaLinkedin className="w-6 h-6" />, url: 'https://linkedin.com/in/farisya-fatanansyah-0a69372bb', label: 'LinkedIn' },
    { icon: <FaInstagram className="w-6 h-6" />, url: 'https://instagram.com/fatanansyah', label: 'Instagram' },
    ...(whatsappUrl ? [{ icon: <FaWhatsapp className="w-6 h-6" />, url: whatsappUrl, label: 'WhatsApp' }] : [{ icon: <FaWhatsapp className="w-6 h-6 opacity-50" />, url: undefined, label: 'WhatsApp (Set in env)', disabled: true }])
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs sm:text-sm font-mono text-primary mb-2 inline-block">Get In Touch</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Contact Me</h2>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-2 sm:mt-3 md:mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                  <Field>
                    <FieldLabel className="text-foreground">Name</FieldLabel>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                    {errors.name && <FieldError>{errors.name}</FieldError>}
                  </Field>

                  <Field>
                    <FieldLabel className="text-foreground">Email</FieldLabel>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    {errors.email && <FieldError>{errors.email}</FieldError>}
                  </Field>

                  <Field>
                    <FieldLabel className="text-foreground">Subject (Optional)</FieldLabel>
                    <Input
                      placeholder="What's this about?"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                    />
                    {errors.title && <FieldError>{errors.title}</FieldError>}
                  </Field>

                  <Field>
                    <FieldLabel className="text-foreground">Message</FieldLabel>
                    <Textarea
                      placeholder="Tell me about your project or just say hello..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                    {errors.message && <FieldError>{errors.message}</FieldError>}
                  </Field>

                  {/* Honeypot field for spam protection */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div className={`p-3 rounded-lg text-sm ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
                        : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'd love to hear from you!
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-4">Find me on</h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    target={item.disabled ? undefined : "_blank"}
                    rel={item.disabled ? undefined : "noopener noreferrer"}
                    className={`p-2 sm:p-3 rounded-lg border border-border transition-all duration-200 overflow-hidden ${
                      item.disabled
                        ? 'cursor-not-allowed opacity-60 hover:bg-transparent'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                    aria-label={item.label}
                    whileHover={item.disabled ? {} : { y: -1 }}
                    whileTap={item.disabled ? {} : { scale: 0.95 }}
                    style={{ transform: 'translateZ(0)' }}
                    onClick={item.disabled ? (e) => e.preventDefault() : undefined}
                  >
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition-transform duration-200 ${
                      item.disabled ? '' : 'hover:scale-105'
                    }`}>
                      {item.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Prefer email? Reach out directly at{' '}
                <a
                  href="mailto:ffatanansyah@gmail.com"
                  className="text-primary hover:underline"
                >
                  ffatanansyah@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
