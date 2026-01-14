import React from 'react';
import { motion } from 'motion/react';
import { achievements } from '../../data/portfolio.data';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-2 inline-block">Milestones</span>
          <h2 className="text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
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
