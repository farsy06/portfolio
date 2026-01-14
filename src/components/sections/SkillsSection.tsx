import React from 'react';
import { motion } from 'motion/react';
import { skills } from '../../data/portfolio.data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const SkillsSection: React.FC = () => {
  // Update document title for skills section
  useDocumentTitle({
    title: 'Skills - Farisya Fatanansyah',
    sectionId: 'skills'
  });

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs sm:text-sm font-mono text-primary mb-2 inline-block">What I Know</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">My Skills</h2>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-2 sm:mt-3 md:mt-4 rounded-full"></div>
        </motion.div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-accent/50 transition-colors group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-12 h-12 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                          <skill.icon className="w-8 h-8" />
                        </div>
                        <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
