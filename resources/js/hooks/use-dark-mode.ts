import { useState, useEffect, useCallback } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

type UseDarkModeReturn = {
    theme: 'light' | 'dark';
    themePreference: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
    isTransitioning: boolean;
    isSystemDark: boolean;
};

export const useDarkMode = (storageKey = 'themePreference'): UseDarkModeReturn => {
    // Get initial theme safely
    const [themePreference, setThemePreference] = useState<ThemeMode>(() => {
        if (typeof window === 'undefined') return 'system';
        
        try {
            return (localStorage.getItem(storageKey) as ThemeMode) || 'system';
        } catch (e) {
            console.warn('Could not access localStorage:', e);
            return 'system';
        }
    });
    
    // Determine the actual theme based on preference and system settings
    const [actualTheme, setActualTheme] = useState<'light' | 'dark'>(() => {
        if (themePreference === 'system') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return themePreference;
    });

    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isSystemDark, setIsSystemDark] = useState(() => 
        typeof window !== 'undefined' 
            ? window.matchMedia('(prefers-color-scheme: dark)').matches 
            : false
    );
    
    // Update actual theme when preference or system theme changes
    useEffect(() => {
        if (themePreference === 'system') {
            setActualTheme(isSystemDark ? 'dark' : 'light');
        } else {
            setActualTheme(themePreference);
        }
    }, [themePreference, isSystemDark]);

    // Apply theme transition and save preference
    const applyThemeTransition = useCallback((theme: 'light' | 'dark') => {
        try {
            document.documentElement.classList.add('theme-transition');
            
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            
            const timeoutId = setTimeout(() => {
                document.documentElement.classList.remove('theme-transition');
                setIsTransitioning(false);
            }, 300);

            return () => clearTimeout(timeoutId);
        } catch (e) {
            console.warn('Error applying theme:', e);
        }
    }, []);

    // Handle system preference changes
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            setIsSystemDark(e.matches);
            if (themePreference === 'system') {
                setActualTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, [themePreference]);

    // Apply theme changes
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        setIsTransitioning(true);
        const timeoutId = setTimeout(() => {
            applyThemeTransition(actualTheme);
        }, 10);

        return () => clearTimeout(timeoutId);
    }, [actualTheme, applyThemeTransition]);

    // Set theme preference and save to storage
    const setTheme = useCallback((theme: ThemeMode) => {
        try {
            if (theme === 'system') {
                localStorage.removeItem(storageKey);
            } else {
                localStorage.setItem(storageKey, theme);
            }
            setThemePreference(theme);
        } catch (e) {
            console.warn('Error setting theme preference:', e);
        }
    }, [storageKey]);

    return { 
        theme: actualTheme,
        themePreference,
        setTheme,
        isTransitioning,
        isSystemDark
    };
};
