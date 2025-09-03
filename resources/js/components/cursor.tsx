import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

interface CursorProps {
  headerHeight?: number;
}

const Cursor: React.FC<CursorProps> = ({ headerHeight = 72 }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isOverHeader, setIsOverHeader] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show cursor after a small delay to prevent flash on page load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsOverHeader(e.clientY <= headerHeight);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      document.body.style.cursor = 'none';
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.style.cursor = 'auto';
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Add hover states for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setIsHovering(true));
      el.addEventListener('mouseleave', () => setIsHovering(false));
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';

      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setIsHovering(true));
        el.removeEventListener('mouseleave', () => setIsHovering(false));
      });
    };
  }, [headerHeight]);

  // Throttle function to limit how often a function can be called
  const useThrottle = <T extends (e: MouseEvent) => void>(
    callback: T,
    delay: number
  ) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastRan = useRef<number>(0);

    return useCallback((event: MouseEvent) => {
      const now = Date.now();

      if (!lastRan.current) {
        callback(event);
        lastRan.current = now;
        return;
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (now - lastRan.current >= delay) {
          callback(event);
          lastRan.current = now;
        }
      }, Math.max(delay - (now - lastRan.current), 0));
    }, [callback, delay]);
  };

  // Extend the Navigator interface to include maxTouchPoints
  interface ExtendedNavigator extends Navigator {
    maxTouchPoints: number;
  }

  // Extend the Window interface to include DocumentTouch
  interface ExtendedWindow extends Window {
    DocumentTouch?: {
      new(): Document;
      prototype: Document;
    };
  }

  // Check if device is touch-enabled (memoized)
  const isTouchDevice = useMemo((): boolean => {
    if (typeof window === 'undefined') return false;

    const nav = navigator as ExtendedNavigator;
    const win = window as unknown as ExtendedWindow;

    return (
      'ontouchstart' in window ||
      (nav.maxTouchPoints > 0) ||
      (win.DocumentTouch && document instanceof win.DocumentTouch) === true
    );
  }, []);

  // Inline style for the cursor
  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: 'translate(-50%, -50%)',
    willChange: 'transform',
    pointerEvents: 'none' as const
  };

  // Create the mouse move handler with throttling
  const handleMouseMove = useThrottle((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOverHeader(e.clientY <= headerHeight);
  }, 16); // ~60fps

  // Handle mouse enter/leave
  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
    document.body.style.cursor = 'none';
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    document.body.style.cursor = 'auto';
  }, []);

  // Set up event listeners
  useEffect(() => {
    if (isTouchDevice) {
      document.body.style.cursor = 'auto';
      return;
    }

    const options = { passive: true };

    // Local handlers for interactive elements
    const handleElementMouseEnter = () => setIsHovering(true);
    const handleElementMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove, options);
    window.addEventListener('mouseenter', handleMouseEnter, options);
    window.addEventListener('mouseleave', handleMouseLeave, options);

    // Add hover states for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleElementMouseEnter, options);
      el.addEventListener('mouseleave', handleElementMouseLeave, options);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);

      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementMouseEnter);
        el.removeEventListener('mouseleave', handleElementMouseLeave);
      });
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, isTouchDevice]);

  // Don't render on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed w-5 h-5 rounded-full pointer-events-none z-100 mix-blend-difference transition-all duration-100 ease-out ${
        isHovering ? 'scale-150' : isOverHeader ? 'scale-110' : 'scale-100'
      } ${isOverHeader ? 'bg-white' : 'bg-white/80'} ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
      style={cursorStyle}
    />
  );
};

export default Cursor;
