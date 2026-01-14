import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from 'next-themes';

// Shadcn Components
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../ui/sheet';

// Icons
import { ArrowRight, ExternalLink, Menu, Moon, Sun } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = ['#home', '#about', '#skills', '#achievements', '#projects', '#contact'];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 py-2">
          <div className="flex justify-between items-center h-12">
            <motion.a
              href="#"
              data-cursor-hover
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent block"
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
                  href={item}
                  data-cursor-hover
                  className="relative text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md group"
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
                    {item.substring(1).charAt(0).toUpperCase() + item.substring(2)}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400"
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
                className="relative hover:bg-gray-200 dark:hover:bg-gray-700"
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
                    className="md:hidden hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item, i) => (
                      <a
                        key={i}
                        href={item}
                        className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-blue-400 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.substring(1).charAt(0).toUpperCase() + item.substring(2)}
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>


      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-200 ease-in-out">
        <div className="container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto transition-colors duration-200 ease-in-out"
          >
            <motion.p
              className="text-blue-600 dark:text-blue-400 font-mono mb-4 transition-colors duration-200 ease-in-out"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Hi there, my name is
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-white transition-colors duration-200 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.6, ease: 'easeOut' },
                y: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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
              className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-8 transition-colors duration-200 ease-in-out"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
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
              className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed transition-colors duration-200 ease-in-out"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'Full Stack',
                  2000,
                  'Game',
                  2000,
                  'Mobile',
                  2000,
                  'Web',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-semibold text-blue-600 dark:text-blue-400"
              />{' '}
              Developer specializing in building exceptional digital experiences. Currently, I'm student class XII RPL in{' '}
              <a
                href="https://smktelkom1medan.sch.id"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200 ease-in-out inline-flex items-center gap-1"
              >
                SMK Telkom 1 Medan
                <ExternalLink className="w-3 h-3" />
              </a>
              .
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-magnetic
                data-magnetic-strength="0.2"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200 ease-in-out flex items-center justify-center gap-2 cursor-pointer"
              >
                View My Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
