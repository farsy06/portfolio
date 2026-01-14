import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

interface CustomCursorProps {
  children: React.ReactNode;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ children }) => {
  const { width } = useWindowSize();
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to elements with data-cursor-hover
    const hoverElements = document.querySelectorAll('[data-cursor-hover]');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Hide cursor on mobile/tablet
  if (width <= 768) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="fixed top-0 left-0 w-6 h-6 bg-primary rounded-full pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          transform: `translate(${cursorPosition.x - 12}px, ${cursorPosition.y - 12}px) scale(${isHovering ? 1.5 : 1})`,
          mixBlendMode: 'difference',
        }}
      />

      {/* Cursor Trail */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-primary/50 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          transform: `translate(${cursorPosition.x - 4}px, ${cursorPosition.y - 4}px) scale(${isHovering ? 2 : 1})`,
        }}
      />

      {children}
    </>
  );
};

export default CustomCursor;
