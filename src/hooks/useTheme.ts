import { useCallback, useContext } from 'react';
import { ThemeContext, ThemeModeType } from '../context/ThemeProvider';

type UseThemeProps = [themeMode: ThemeModeType, toggleTheme: () => void];

function useTheme(): UseThemeProps {
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    if (themeMode === 'light') setThemeMode('dark');
    else setThemeMode('light');
  }, [themeMode]);

  return [themeMode, toggleTheme];
}

export { useTheme };
