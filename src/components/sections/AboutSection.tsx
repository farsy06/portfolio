import React from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { Badge } from '../ui/badge';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-2 inline-block">Get To Know</span>
          <h2 className="text-4xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img src="/images/myself.jpg" alt="Farisya Fatanansyah" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a versatile developer from Indonesia, specializing in{' '}
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
              development. I bring ideas to life across multiple platforms, creating engaging digital experiences that users love.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              In the <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack</span> world, I build robust web applications from front to back. For <span className="font-semibold text-blue-600 dark:text-blue-400">Game Development</span>, I create interactive experiences that combine creativity with technical expertise. And in <span className="font-semibold text-blue-600 dark:text-blue-400">Mobile Development</span>, I craft smooth, responsive apps that feel native on any device.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              With 2 years of hands-on experience, I've worked with technologies like React, Node.js, Unity, and Flutter to deliver high-quality solutions. I'm passionate about clean code, intuitive design, and creating seamless user experiences across all platforms. Let's build something amazing together!
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
