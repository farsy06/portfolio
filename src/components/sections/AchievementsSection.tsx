import React from 'react';
import { motion } from 'motion/react';
import { achievements } from '../../data/portfolio.data';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const AchievementsSection: React.FC = () => {
  // Update document title for achievements section
  useDocumentTitle({
    title: 'Achievements - Farisya Fatanansyah',
    sectionId: 'achievements'
  });

  return (
    <section id="achievements" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs sm:text-sm font-mono text-primary mb-2 inline-block">Milestones</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Achievements</h2>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                                        <div className={`w-12 h-12 rounded-lg ${achievement.iconBg} flex items-center justify-center ${achievement.iconColor}`}>
                                            {achievement.icon}
                                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {achievement.title}
                          </h3>
                          <Badge variant="outline" className={achievement.badgeColor}>
                            {achievement.year}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
