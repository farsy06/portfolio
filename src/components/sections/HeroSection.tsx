import React from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { Button } from '../ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

const HeroSection: React.FC = () => {
  // Update document title for hero section
  useDocumentTitle({
    title: 'Farisya Fatanansyah - Portfolio',
    sectionId: 'home'
  });

  return (
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
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
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
  );
};

export default HeroSection;
