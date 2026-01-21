import { motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa6';
import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolio.data';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const ProjectsSection: React.FC = () => {
  // Update document title for projects section
  useDocumentTitle({
    title: 'Projects - Farisya Fatanansyah',
    sectionId: 'projects'
  });

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs sm:text-sm font-mono text-primary mb-2 inline-block">My Work</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Featured Projects</h2>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-2 sm:mt-3 md:mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4 sm:px-0 lg:px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all text-xs sm:text-sm font-medium border border-white/20"
                        >
                          <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4"/>
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all text-xs sm:text-sm font-medium"
                        >
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4"/>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6 relative">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 pr-20">{project.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
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

export default ProjectsSection;
