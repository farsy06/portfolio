import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Field,
  FieldLabel,
  FieldError,
} from '../ui/field';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const socialLinks = [
    { icon: <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />, url: 'https://github.com/farsy06', label: 'GitHub' },
    { icon: <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />, url: 'https://linkedin.com/in/farisya-fatanansyah-0a69372bb', label: 'LinkedIn' },
    { icon: <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />, url: 'https://instagram.com/fatanansyah', label: 'Instagram' }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-2 inline-block">Get In Touch</span>
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                  <Field>
                    <FieldLabel>Name</FieldLabel>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                    {errors.name && <FieldError>{errors.name}</FieldError>}
                  </Field>

                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    {errors.email && <FieldError>{errors.email}</FieldError>}
                  </Field>

                  <Field>
                    <FieldLabel>Message</FieldLabel>
                    <Textarea
                      placeholder="Tell me about your project or just say hello..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                    {errors.message && <FieldError>{errors.message}</FieldError>}
                  </Field>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'd love to hear from you!
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Find me on</h4>
              <div className="flex gap-4">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label={item.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Prefer email? Reach out directly at{' '}
                <a
                  href="mailto:ffatanansyah@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  ffatanansyah@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="mt-24 text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-6">
          <p>Designed & Built by Farisya Fatanansyah</p>
          <p className="mt-2">Made with ❤️ from Indonesia</p>
          <p className="mt-2">{new Date().getFullYear()} - All rights reserved</p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
