import React from 'react';

export const initialThemeState = {
  theme: 'original',
  setTheme: () => null
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;
