import React, { useState, useEffect, useCallback, useRef } from 'react';

interface TypewriterEffectProps {
    texts: string[];
    speed?: number;
    delay?: number;
    className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
    texts,
    speed = 80,
    delay = 2000,
    className = ''
}) => {
    const [displayText, setDisplayText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const timerRef = useRef<number | null>(null);
    const isMounted = useRef<boolean>(true);

    // Memoize the current text to avoid recalculating
    const currentText = texts[currentTextIndex % texts.length];

    const type = useCallback(() => {
        if (!isMounted.current) return;

        // Calculate the next display text
        const nextChar = isDeleting ? -1 : 1;
        const nextText = currentText.substring(0, displayText.length + nextChar);

        setDisplayText(nextText);

        // Calculate delay for next action
        let typeSpeed = speed;

        if (isDeleting) {
            typeSpeed = speed / 2; // Faster when deleting
        }

        // Handle state transitions
        if (!isDeleting && nextText === currentText) {
            // Pause at the end of typing
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
                if (isMounted.current) setIsDeleting(true);
            }, delay) as unknown as number;
            return;
        }

        if (isDeleting && nextText === '') {
            // Move to next text after deleting
            setIsDeleting(false);
            setCurrentTextIndex(prev => (prev + 1) % texts.length);
            typeSpeed = speed; // Reset speed for next text
        }

        // Schedule next update
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(type, typeSpeed) as unknown as number;
    }, [currentText, displayText, isDeleting, speed, delay, texts.length]);

    // Effect to handle the typing animation
    useEffect(() => {
        // Initial delay before starting
        const initialTimer = setTimeout(() => {
            if (isMounted.current) {
                type();
            }
        }, 100);

        return () => {
            clearTimeout(initialTimer);
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
            }
        };
    }, [type]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            isMounted.current = false;
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, []);

    return (
        <span className={`inline-block ${className}`}>
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

export default TypewriterEffect;
