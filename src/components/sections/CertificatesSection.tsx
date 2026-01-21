import { useState } from 'react';
import { motion } from 'motion/react';
import { certificates } from '../../data/portfolio.data';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const CertificatesSection: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Update document title for certificates section
  useDocumentTitle({
    title: 'Certificates - Farisya Fatanansyah',
    sectionId: 'certificates'
  });

  const handleCertificateClick = (certificate: typeof certificates[0]) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  return (
    <section id="certificates" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs sm:text-sm font-mono text-primary mb-2 inline-block">Milestones</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Certificates</h2>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
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
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm" onClick={() => handleCertificateClick(certificate)}>
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${certificate.iconBg.replace('bg-', 'bg-').replace('dark:', '')}`}></div>

                  <CardContent className="relative p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${certificate.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden`}>
                          {certificate.icon.startsWith('/images/') ? (
                            <img
                              src={certificate.icon}
                              alt={`${certificate.title} logo`}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <span className={`text-2xl sm:text-3xl ${certificate.iconColor}`}>{certificate.icon}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                            {certificate.title}
                          </h3>
                          <Badge variant="outline" className={`${certificate.badgeColor} font-semibold px-3 py-1 group-hover:scale-105 transition-transform duration-300`}>
                            {certificate.year}
                          </Badge>
                        </div>
                        {certificate.description && (
                          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                            {certificate.description}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          <span className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors duration-300"></span>
                          <span className="font-medium">Click/Tap to view certificate</span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner element */}
                    <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <div className="w-full h-full border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-lg ${selectedCertificate?.iconBg} flex items-center justify-center overflow-hidden`}>
                {selectedCertificate?.icon.startsWith('/images/') ? (
                  <img
                    src={selectedCertificate.icon}
                    alt={`${selectedCertificate.title} logo`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className={`${selectedCertificate?.iconColor}`}>{selectedCertificate?.icon}</span>
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold">{selectedCertificate?.title}</h3>
                <Badge variant="outline" className={selectedCertificate?.badgeColor}>
                  {selectedCertificate?.year}
                </Badge>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            {selectedCertificate?.description && (
              <DialogDescription className="text-base leading-relaxed">
                {selectedCertificate.description}
              </DialogDescription>
            )}
            {selectedCertificate?.pdfPath && (
              <div className="flex flex-col gap-4">
                <div className="border rounded-lg overflow-hidden">
                  <iframe
                    src={selectedCertificate.pdfPath}
                    className="w-full h-[600px] border-0"
                    title={`${selectedCertificate.title} PDF`}
                  />
                </div>
                <div className="flex gap-2 justify-center">
                  <a
                    href={selectedCertificate.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-sm font-medium transition-colors"
                  >
                    View Full Size
                  </a>
                  <a
                    href={selectedCertificate.pdfPath}
                    download
                    className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md text-sm font-medium transition-colors"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;
