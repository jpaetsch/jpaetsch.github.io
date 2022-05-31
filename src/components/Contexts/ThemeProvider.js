import React, { useState, useEffect } from 'react';
import ThemeContext, { initialThemeState } from './ThemeContext';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedThemeLocal = localStorage.getItem('globalTheme');
        return savedThemeLocal || initialThemeState.theme;
    });

    useEffect(() => {
        localStorage.setItem('globalTheme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme--${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
