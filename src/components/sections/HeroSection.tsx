import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from 'next-themes';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

// Shadcn Components
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '../ui/sheet';

// Icons
import { ArrowRight, ExternalLink, Menu, Moon, Sun, Home, Info, Mail, Award, Wrench, Folder } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Update document title for hero section
  useDocumentTitle({
    title: 'Farisya Fatanansyah - Portfolio',
    sectionId: 'home'
  });

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: Info },
    { href: '#skills', label: 'Skills', icon: Wrench },
    { href: '#achievements', label: 'Achievements', icon: Award },
    { href: '#projects', label: 'Projects', icon: Folder },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-2">
          <div className="flex justify-between items-center h-12">
            <motion.a
              href="#"
              data-cursor-hover
              className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 15,
                duration: 0.3
              }}
            >
              FF
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  data-cursor-hover
                  className="relative text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2 rounded-md group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.05 + 0.2,
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                    duration: 0.3
                  }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative">
                    {item.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="relative hover:bg-accent"
              >
                <motion.div
                  animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.div>
              </Button>

              {/* Mobile menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden hover:bg-accent"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0 flex flex-col">
                  {/* Header Section */}
                  <SheetHeader className="px-6 pt-6 pb-4 space-y-2 border-b">
                    <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
                    <SheetDescription className="text-sm text-muted-foreground">
                      Navigate through our sections
                    </SheetDescription>
                  </SheetHeader>

                  {/* Navigation Links */}
                  <nav className="flex-1 overflow-y-auto px-4 py-6">
                    <div className="space-y-1">
                      {navItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={i}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200 group"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span>{item.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </nav>

                  {/* Footer Section */}
                  <div className="px-6 py-4 border-t bg-muted/30">
                    <p className="text-xs text-muted-foreground text-center">
                      © {new Date().getFullYear()} Farisya Fatanansyah. All rights reserved.
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
        <div className="container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <motion.p
              className="text-primary font-mono mb-4 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Hi there, my name is
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: { duration: 0.6, ease: 'easeOut' },
                delay: 0.3
              }}
            >
              <span className="relative inline-block">
                <motion.span
                  className="relative z-10"
                  initial={{ backgroundPosition: '200% 0' }}
                  animate={{
                    backgroundPosition: '-200% 0',
                    transition: {
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 3,
                      ease: 'linear'
                    }
                  }}
                >
                  Farisya Fatanansyah.
                </motion.span>
              </span>
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-muted-foreground mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <TypeAnimation
                sequence={[
                  'I build things for the web.',
                  2000,
                  'I create full-stack applications.',
                  2000,
                  'I love solving problems.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-bold"
              />
            </motion.h2>
            <motion.p
              className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Passionate{' '}
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Game Developer',
                  2000,
                  'Mobile Developer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-semibold text-primary"
              />{' '}
              crafting innovative digital solutions. Currently studying at{' '}
              <a
                href="https://smktelkom1medan.sch.id"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                SMK Telkom 1 Medan
                <ExternalLink className="w-3 h-3" />
              </a>
              , building a strong foundation in software development.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                className="px-8 py-4 flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 flex items-center justify-center gap-2"
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
