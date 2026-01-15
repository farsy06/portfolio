import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

interface CustomCursorProps {
  children: React.ReactNode;
}

type CursorState = 'default' | 'hover' | 'link';

const CustomCursor: React.FC<CustomCursorProps> = ({ children }) => {
  const { width } = useWindowSize();
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleLinkMouseEnter = () => setCursorState('link');
    const handleHoverMouseEnter = () => setCursorState('hover');
    const handleMouseLeave = () => setCursorState('default');

    // Add event listeners to links
    const linkElements = document.querySelectorAll('a[href]');
    linkElements.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add event listeners to elements with data-cursor-hover (but not links)
    const hoverElements = document.querySelectorAll('[data-cursor-hover]:not(a)');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      linkElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Hide cursor on mobile/tablet
  if (width <= 768) {
    return <>{children}</>;
  }

  const getCursorScale = () => {
    switch (cursorState) {
      case 'link':
        return 1.8; // Larger scale for links
      case 'hover':
        return 1.5; // Medium scale for hover elements
      default:
        return 1; // Normal scale
    }
  };

  const getCursorColor = () => {
    switch (cursorState) {
      case 'link':
        return 'bg-primary'; // Keep primary for links
      case 'hover':
        return 'bg-primary/80'; // Slightly transparent for hover
      default:
        return 'bg-primary';
    }
  };

  return (
    <>
      {/* Custom Cursor */}
      <div
        className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] transition-all duration-200 ease-out ${getCursorColor()}`}
        style={{
          transform: `translate(${cursorPosition.x - 12}px, ${cursorPosition.y - 12}px) scale(${getCursorScale()})`,
          mixBlendMode: 'difference',
        }}
      />

      {/* Cursor Trail */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-primary/50 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          transform: `translate(${cursorPosition.x - 4}px, ${cursorPosition.y - 4}px) scale(${getCursorScale()})`,
        }}
      />

      {children}
    </>
  );
};

export default CustomCursor;
