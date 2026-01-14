import { useEffect } from 'react';

interface UseDocumentTitleOptions {
  title: string;
  sectionId: string;
  threshold?: number;
}

export const useDocumentTitle = ({
  title,
  sectionId,
  threshold = 0.5
}: UseDocumentTitleOptions) => {
  useEffect(() => {
    const originalTitle = document.title;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = title;
          } else {
            // Only revert if we're not intersecting with any other section
            const allSections = ['home', 'about', 'skills', 'achievements', 'projects', 'contact'];
            const visibleSections = allSections.filter(sectionId => {
              const element = document.getElementById(sectionId);
              if (!element) return false;

              const rect = element.getBoundingClientRect();
              return rect.top < window.innerHeight && rect.bottom > 0;
            });

            // If no sections are visible, revert to original title
            if (visibleSections.length === 0) {
              document.title = originalTitle;
            }
          }
        });
      },
      { threshold }
    );

    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [title, sectionId, threshold]);
};
