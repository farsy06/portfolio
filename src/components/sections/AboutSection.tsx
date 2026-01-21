import React from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { Badge } from '../ui/badge';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const AboutSection: React.FC = () => {
  // Update document title for about section
  useDocumentTitle({
    title: 'About - Farisya Fatanansyah',
    sectionId: 'about'
  });

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs sm:text-sm font-mono text-primary mb-2 inline-block">Get To Know</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">About Me</h2>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-2 sm:mt-3 md:mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col xl:flex-row items-center gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            className="w-full xl:w-1/2 order-2 xl:order-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img src="/images/myself.jpg" alt="Farisya Fatanansyah" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full xl:w-1/2 order-1 xl:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">Who I Am</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a versatile developer from Indonesia, focusing on{' '}
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
                className="font-semibold text-primary"
              />{' '}
              development. I enjoy building digital products that are functional, visually appealing, and easy to use across different platforms.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As a <span className="font-semibold text-primary">Full Stack Developer</span>, I work on both frontend and backend systems, turning ideas into complete web applications. In{' '}
              <span className="font-semibold text-primary">Game Development</span>, I create interactive experiences using Unity and C#, blending creativity with technical problem-solving. For{' '}
              <span className="font-semibold text-primary">Mobile Development</span>, I build responsive and smooth applications using Flutter.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over <span className="font-semibold text-primary">2 years of hands-on experience</span>, I've worked with technologies such as React, TypeScript, Node.js, Laravel, Unity, and Flutter. I value clean code, thoughtful design, and continuous learning, and I’m always excited to take on new challenges and collaborate on meaningful projects.
            </p>
            <div className="flex flex-wrap gap-2">
              {['PHP', 'Laravel', 'React', 'Node.js', 'Tailwind CSS', 'JavaScript', 'C#', 'Dart', 'TypeScript'].map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
