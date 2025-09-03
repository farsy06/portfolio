import React, { useState, useEffect, useRef } from 'react';

interface CursorProps {
  headerHeight?: number;
}

const Cursor: React.FC<CursorProps> = ({ headerHeight = 72 }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isOverHeader, setIsOverHeader] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check if device is touch-enabled
  useEffect(() => {
    const checkTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    
    setIsTouchDevice(checkTouchDevice());
    
    // Also check on window resize in case of device rotation
    const handleResize = () => {
      setIsTouchDevice(checkTouchDevice());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // Check if cursor is over header (first 72px by default)
      setIsOverHeader(e.clientY <= headerHeight);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    // Hide cursor when it leaves the window
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover states for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setIsHovering(true));
      el.addEventListener('mouseleave', () => setIsHovering(false));
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);

      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setIsHovering(true));
        el.removeEventListener('mouseleave', () => setIsHovering(false));
      });
    };
  }, [headerHeight]);

  // Don't render anything on touch devices
  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed w-5 h-5 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-100 ease-out ${
        isHovering ? 'scale-150' : isOverHeader ? 'scale-110' : 'scale-100'
      } ${isOverHeader ? 'bg-white' : 'bg-white/80'} ${hidden ? 'opacity-0' : 'opacity-100'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform'
      }}
    />
  );
};

export default Cursor;
