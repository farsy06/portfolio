import { useCallback, useEffect, useState } from 'react';

export type Appearance = 'light' | 'dark' | 'system';

const prefersDark = () => {
    if (typeof window === 'undefined') {
        return false;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

// Preload both themes
const preloadThemes = () => {
    if (typeof document === 'undefined') return;
    
    // Create a style element to preload both themes
    const style = document.createElement('style');
    style.id = 'theme-preload';
    style.textContent = `
        .theme-preload * {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
    `;
    document.head.appendChild(style);
};

const applyTheme = (appearance: Appearance) => {
    if (typeof document === 'undefined') return;
    
    const isDark = appearance === 'dark' || (appearance === 'system' && prefersDark());
    
    // Add a class to enable transitions
    document.documentElement.classList.add('theme-preload');
    
    // Apply the theme
    document.documentElement.classList.toggle('dark', isDark);
    
    // Force a reflow to ensure the transition happens
    void document.documentElement.offsetHeight;
    
    // Remove the transition class after the transition completes
    setTimeout(() => {
        document.documentElement.classList.remove('theme-preload');
    }, 300);
};

const mediaQuery = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return window.matchMedia('(prefers-color-scheme: dark)');
};

const handleSystemThemeChange = () => {
    const currentAppearance = localStorage.getItem('appearance') as Appearance;
    applyTheme(currentAppearance || 'system');
};

export function initializeTheme() {
    const savedAppearance = (localStorage.getItem('appearance') as Appearance) || 'system';
    
    // Preload themes on initialization
    if (typeof window !== 'undefined') {
        preloadThemes();
    }

    applyTheme(savedAppearance);

    // Add the event listener for system theme changes
    mediaQuery()?.addEventListener('change', handleSystemThemeChange);
    
    // Cleanup function
    return () => {
        mediaQuery()?.removeEventListener('change', handleSystemThemeChange);
    };
}

export function useAppearance() {
    const [appearance, setAppearance] = useState<Appearance>('system');

    const updateAppearance = useCallback((mode: Appearance) => {
        setAppearance(mode);

        // Store in localStorage for client-side persistence...
        localStorage.setItem('appearance', mode);

        // Store in cookie for SSR...
        setCookie('appearance', mode);

        applyTheme(mode);
    }, []);

    useEffect(() => {
        const savedAppearance = localStorage.getItem('appearance') as Appearance | null;
        updateAppearance(savedAppearance || 'system');

        return () => mediaQuery()?.removeEventListener('change', handleSystemThemeChange);
    }, [updateAppearance]);

    return { appearance, updateAppearance } as const;
}
