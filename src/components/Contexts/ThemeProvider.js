import React, { useState, useEffect } from 'react';
import ThemeContext, { initialThemeState } from './ThemeContext';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedThemeLocal = localStorage.getItem('globalTheme');
        return savedThemeLocal || initialThemeState.theme;
    });

    // const [theme, setTheme] = useState(initialThemeState.theme);
    // useEffect(() => {
    //     console.log('First Effect Hook 1, theme is: ' + theme);
    //     const savedThemeLocal = localStorage.getItem('globalTheme');

    //     if (!!savedThemeLocal) {
    //         console.log('First Effect Hook 2, getting local storage is: ' + savedThemeLocal);
    //         setTheme(savedThemeLocal);
    //     }
    // }, []);

    useEffect(() => {
        console.log('Second Effect Hook 1, setting local storage to: ' + theme);
        localStorage.setItem('globalTheme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme--${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
