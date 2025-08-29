import { useState, useEffect, useCallback } from 'react';

type UseDarkModeReturn = {
    darkMode: boolean;
    toggleDarkMode: () => void;
    isTransitioning: boolean;
    isSystemDark: boolean;
};

export const useDarkMode = (storageKey = 'darkMode'): UseDarkModeReturn => {
    // Get initial theme safely
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        if (typeof window === 'undefined') return false;
        
        try {
            const savedTheme = localStorage.getItem(storageKey);
            if (savedTheme !== null) {
                return savedTheme === 'true';
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        } catch (e) {
            console.warn('Could not access localStorage:', e);
            return false;
        }
    });

    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isSystemDark, setIsSystemDark] = useState(() => 
        typeof window !== 'undefined' 
            ? window.matchMedia('(prefers-color-scheme: dark)').matches 
            : false
    );

    // Apply theme transition and save preference
    const applyThemeTransition = useCallback((isDark: boolean) => {
        try {
            document.documentElement.classList.add('theme-transition');
            
            if (isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            localStorage.setItem(storageKey, isDark.toString());
            
            const timeoutId = setTimeout(() => {
                document.documentElement.classList.remove('theme-transition');
                setIsTransitioning(false);
            }, 300);

            return () => clearTimeout(timeoutId);
        } catch (e) {
            console.warn('Error applying theme:', e);
        }
    }, [storageKey]);

    // Handle system preference changes
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            setIsSystemDark(e.matches);
            try {
                if (!localStorage.getItem(storageKey)) {
                    setDarkMode(e.matches);
                }
            } catch (e) {
                console.warn('Error handling system theme change:', e);
            }
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, [storageKey]);

    // Apply theme changes
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        setIsTransitioning(true);
        const timeoutId = setTimeout(() => {
            applyThemeTransition(darkMode);
        }, 10);

        return () => clearTimeout(timeoutId);
    }, [darkMode, applyThemeTransition]);

    const toggleDarkMode = useCallback(() => {
        setDarkMode(prev => {
            const newMode = !prev;
            // Clear the saved preference if matching system preference
            try {
                if (newMode === isSystemDark) {
                    localStorage.removeItem(storageKey);
                }
            } catch (e) {
                console.warn('Error toggling dark mode:', e);
            }
            return newMode;
        });
    }, [isSystemDark, storageKey]);

    return { 
        darkMode, 
        toggleDarkMode, 
        isTransitioning,
        isSystemDark
    };
};
