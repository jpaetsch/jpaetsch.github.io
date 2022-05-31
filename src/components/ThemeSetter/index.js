import './index.scss';
import React, { useContext } from 'react';
import ThemeContext from '../Contexts/ThemeContext';

export default function ThemeSetter() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
      {themeOptions.map((option, idx) => (
        <option value={option.value} key={idx}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

const themeOptions = [{ value: 'original' }, { value: 'bright' }];

