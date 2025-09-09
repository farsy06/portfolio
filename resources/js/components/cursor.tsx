import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

// Types
interface CursorProps {
    size?: number;
    innerScale?: number;
    outerScale?: number;
    outerAlpha?: number;
    innerColor?: string;
    outerColor?: string;
    clickScale?: number;
    hoverScale?: number;
    transitionDuration?: number;
    trailingSpeed?: number;
}

// Constants
const DEFAULT_PROPS: Required<CursorProps> = {
    size: 40, // Increased from 30
    innerScale: 0.3, // Increased from 0.15
    outerScale: 1.2, // Increased from 1
    outerAlpha: 0.6, // Increased from 0.4
    innerColor: '255, 255, 255',
    outerColor: '99, 179, 237', // Brighter blue
    clickScale: 0.6, // More pronounced click effect
    hoverScale: 1.8, // More noticeable hover effect
    transitionDuration: 0.1, // Faster transitions
    trailingSpeed: 0.7
};

// Add cursor styles to document head
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = `
        /* Hide default cursor everywhere */
        * {
            cursor: none !important;
        }
        
        /* Cursor container */
        .cursor {
            position: fixed;
            display: block;
            width: ${DEFAULT_PROPS.size}px;
            height: ${DEFAULT_PROPS.size}px;
            pointer-events: none !important;
            z-index: 2147483647;
            mix-blend-mode: difference;
            transition: 
                transform ${DEFAULT_PROPS.transitionDuration}s ease-out,
                width ${DEFAULT_PROPS.transitionDuration}s ease-out,
                height ${DEFAULT_PROPS.transitionDuration}s ease-out;
            will-change: transform, width, height;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }
        
        .cursor__inner {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: rgba(${DEFAULT_PROPS.innerColor}, 1);
            transform: scale(${DEFAULT_PROPS.innerScale});
            transition: transform ${DEFAULT_PROPS.transitionDuration}s cubic-bezier(0.2, 0.8, 0.2, 1);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
            z-index: 2;
        }
        
        .cursor__outer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid rgba(${DEFAULT_PROPS.outerColor}, ${DEFAULT_PROPS.outerAlpha});
            transform: scale(${DEFAULT_PROPS.outerScale});
            transition: 
                transform ${DEFAULT_PROPS.transitionDuration}s cubic-bezier(0.2, 0.8, 0.2, 1),
                border-color ${DEFAULT_PROPS.transitionDuration}s ease-out;
            box-shadow: 0 0 20px rgba(${DEFAULT_PROPS.outerColor}, 0.3);
            z-index: 1;
        }
        
        /* Hover state */
        .cursor--hover {
            transform: translate(-50%, -50%) scale(${DEFAULT_PROPS.hoverScale});
        }
        
        .cursor--hover .cursor__inner {
            transform: scale(${DEFAULT_PROPS.hoverScale * DEFAULT_PROPS.innerScale});
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.8);
        }
        
        .cursor--hover .cursor__outer {
            transform: scale(${DEFAULT_PROPS.hoverScale * DEFAULT_PROPS.outerScale});
            border-width: 3px;
            border-color: rgba(${DEFAULT_PROPS.outerColor}, 1);
            box-shadow: 0 0 30px rgba(${DEFAULT_PROPS.outerColor}, 0.6);
        }
        
        /* Click state */
        .cursor--click .cursor__inner {
            transform: scale(${DEFAULT_PROPS.clickScale * DEFAULT_PROPS.innerScale});
        }
        
        .cursor--click .cursor__outer {
            transform: scale(${DEFAULT_PROPS.clickScale * DEFAULT_PROPS.outerScale});
        }
        
        /* Click effect */
        [data-cursor-clicked="true"] {
            position: relative;
            transition: transform 0.1s ease-out;
        }
        
        [data-cursor-clicked="true"]::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: cursorClickEffect 0.4s ease-out;
        }
        
        @keyframes cursorClickEffect {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0.5;
            }
            100% {
                transform: translate(-50%, -50%) scale(2);
                opacity: 0;
            }
        }
        
        @media (pointer: coarse) {
            html, body, a, button, [data-cursor] {
                cursor: auto !important;
            }
            .cursor {
                display: none !important;
            }
        }
    `;
    document.head.appendChild(style);
}

const Cursor: React.FC<CursorProps> = (props) => {
    // Merge default props with user props
    const {
        size = 30,
        innerScale = 0.15,
        outerScale = 1,
        outerAlpha = 0.4,
        innerColor = '255, 255, 255',
        outerColor = '59, 130, 246',
        clickScale = 0.7,
        hoverScale = 1.5,
    } = props;

    // Refs
    const cursorRef = useRef<HTMLDivElement>(null);
    const rafId = useRef<number | null>(null);
    const lastMousePosition = useRef({ x: 0, y: 0 });
    const position = useRef({ x: 0, y: 0 });

    // State
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    // Motion values
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);
    const innerCursorScale = useMotionValue(innerScale);
    const outerCursorScale = useMotionValue(outerScale);

    // Spring configurations - adjusted for snappier movement
    const springX = useSpring(cursorX, { damping: 15, stiffness: 800, mass: 0.3 });
    const springY = useSpring(cursorY, { damping: 15, stiffness: 800, mass: 0.3 });

    // Initialize cursor position and visibility
    useEffect(() => {
        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;
        
        position.current = { x, y };
        lastMousePosition.current = { x, y };
        
        cursorX.set(x);
        cursorY.set(y);
        
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, [cursorX, cursorY]);

    // Handle mouse movement - update position directly for immediate response
    const onMouseMove = useCallback((e: MouseEvent) => {
        const { clientX, clientY } = e;
        lastMousePosition.current = { x: clientX, y: clientY };
        cursorX.set(clientX);
        cursorY.set(clientY);
        if (!isVisible) setIsVisible(true);
    }, [isVisible, cursorX, cursorY]);

    // Handle click states
    const onMouseDown = useCallback(() => {
        setIsClicked(true);
    }, []);

    const onMouseUp = useCallback(() => {
        setIsClicked(false);
    }, []);

    // Handle hover states
    const onElementHover = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isInteractive = target.matches('a, button, [role="button"], [data-cursor-hover]');
        setIsHovered(isInteractive);
    }, []);

    // Animation loop - simplified for performance
    const animate = useCallback(() => {
        rafId.current = requestAnimationFrame(animate);
        
        // Update cursor scale based on state
        const targetInnerScale = isClicked 
            ? innerScale * clickScale 
            : isHovered 
                ? innerScale * hoverScale 
                : innerScale;
                
        const targetOuterScale = isClicked 
            ? outerScale * clickScale 
            : isHovered 
                ? outerScale * hoverScale 
                : outerScale;
        
        innerCursorScale.set(targetInnerScale);
        outerCursorScale.set(targetOuterScale);
    }, [
        innerCursorScale, 
        outerCursorScale, 
        innerScale, 
        outerScale, 
        clickScale, 
        hoverScale, 
        isHovered, 
        isClicked
    ]);

    // Set up event listeners
    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseover', onElementHover);
        
        // Start animation loop
        rafId.current = requestAnimationFrame(animate);
        
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mouseover', onElementHover);
            
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [onMouseMove, onMouseDown, onMouseUp, onElementHover, animate]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    ref={cursorRef}
                    className={`cursor ${isHovered ? 'cursor--hover' : ''} ${isClicked ? 'cursor--click' : ''}`}
                    style={{
                        x: springX,
                        y: springY,
                        width: size,
                        height: size,
                        opacity: isVisible ? 1 : 0,
                    }}
                >
                    <motion.div
                        className="cursor__inner"
                        style={{
                            backgroundColor: `rgb(${innerColor})`,
                        }}
                    />
                    <motion.div
                        className="cursor__outer"
                        style={{
                            borderColor: `rgba(${outerColor}, ${outerAlpha})`,
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default React.memo(Cursor);
