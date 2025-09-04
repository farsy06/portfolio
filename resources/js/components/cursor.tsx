import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

interface CursorProps {
    headerHeight?: number;
}

const Cursor: React.FC<CursorProps> = ({ headerHeight = 72 }) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const rafId = useRef<number | null>(null);
    const lastUpdateTime = useRef<number>(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isOverHeader, setIsOverHeader] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Use refs to track position without causing re-renders
    const currentPosition = useRef({ x: 0, y: 0 });
    const currentState = useRef({ isHovering: false, isOverHeader: false, isVisible: false });

    // Update refs when state changes
    useEffect(() => {
        currentState.current = { isHovering, isOverHeader, isVisible };
    }, [isHovering, isOverHeader, isVisible]);

    // Optimized update function using RAF
    const updateCursorPosition = useCallback((x: number, y: number) => {
        const now = performance.now();

        // Throttle to 60fps max
        if (now - lastUpdateTime.current < 16) {
            return;
        }

        lastUpdateTime.current = now;
        currentPosition.current = { x, y };

        // Cancel previous RAF if still pending
        if (rafId.current) {
            cancelAnimationFrame(rafId.current);
        }

        rafId.current = requestAnimationFrame(() => {
            if (cursorRef.current) {
                const state = currentState.current;
                const scale = state.isHovering ? 1.5 : state.isOverHeader ? 1.1 : 1;
                const size = 20; // Width/height of the cursor (w-5 h-5 = 20px)

                // Simple positioning - center the cursor at mouse position
                cursorRef.current.style.transform = `translate3d(${x - size/2}px, ${y - size/2}px, 0) scale(${scale})`;
            }
        });
    }, []);

    // Initialize cursor position and visibility
    useEffect(() => {
        // Show cursor after a small delay to prevent flash on page load
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const { clientX, clientY } = e;
        updateCursorPosition(clientX, clientY);

        // Only update header state if it actually changes
        const overHeader = clientY <= headerHeight;
        if (overHeader !== isOverHeader) {
            setIsOverHeader(overHeader);
        }
    }, [headerHeight, isOverHeader, updateCursorPosition]);

    const handleMouseEnter = useCallback(() => {
        setIsVisible(true);
        document.body.style.cursor = 'none';
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsVisible(false);
        document.body.style.cursor = 'auto';
    }, []);

    // Optimized hover handlers
    const handleElementMouseEnter = useCallback(() => {
        if (!isHovering) setIsHovering(true);
    }, [isHovering]);

    const handleElementMouseLeave = useCallback(() => {
        if (isHovering) setIsHovering(false);
    }, [isHovering]);

    // Check if device is touch-enabled (memoized)
    const isTouchDevice = useMemo((): boolean => {
        if (typeof window === 'undefined') return false;

        return (
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            /Mobi|Android/i.test(navigator.userAgent)
        );
    }, []);

    // Set up event listeners with passive options
    useEffect(() => {
        if (isTouchDevice) {
            document.body.style.cursor = 'auto';
            return;
        }

        const passiveOptions = { passive: true, capture: false };

        window.addEventListener('mousemove', handleMouseMove, passiveOptions);
        window.addEventListener('mouseenter', handleMouseEnter, passiveOptions);
        window.addEventListener('mouseleave', handleMouseLeave, passiveOptions);

        // Use delegation for interactive elements to avoid adding many listeners
        const handleDocumentMouseOver = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.matches('a, button, [data-cursor-hover], input, select, textarea, [role="button"]')) {
                handleElementMouseEnter();
            }
        };

        const handleDocumentMouseOut = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.matches('a, button, [data-cursor-hover], input, select, textarea, [role="button"]')) {
                handleElementMouseLeave();
            }
        };

        document.addEventListener('mouseover', handleDocumentMouseOver, passiveOptions);
        document.addEventListener('mouseout', handleDocumentMouseOut, passiveOptions);

        return () => {
            // Cancel any pending RAF
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }

            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleDocumentMouseOver);
            document.removeEventListener('mouseout', handleDocumentMouseOut);

            // Reset cursor
            document.body.style.cursor = 'auto';
        };
    }, [
        handleMouseMove,
        handleMouseEnter,
        handleMouseLeave,
        handleElementMouseEnter,
        handleElementMouseLeave,
        isTouchDevice
    ]);

    // Update cursor when state changes (for immediate visual feedback)
    useEffect(() => {
        if (currentPosition.current.x !== 0 || currentPosition.current.y !== 0) {
            updateCursorPosition(currentPosition.current.x, currentPosition.current.y);
        }
    }, [isHovering, isOverHeader, updateCursorPosition]);

    // Don't render on touch devices
    if (isTouchDevice) {
        return null;
    }

    return (
        <div
            ref={cursorRef}
            className={`cursor fixed w-5 h-5 rounded-full pointer-events-none z-[9999] transition-opacity duration-150 ease-out ${
                isOverHeader ? 'bg-white' : 'bg-white/80'
            } ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
            style={{
                mixBlendMode: 'difference',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                transformOrigin: 'center center',
                left: '0px',
                top: '0px',
            }}
        />
    );
};

export default Cursor;
