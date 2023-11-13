import { useTheme } from '../../hooks/useTheme';
import { Wrapper } from './styled';

function ThemeToggleButton() {
  const [themeMode, toggleTheme] = useTheme();

  return (
    <Wrapper onClick={toggleTheme}>
      {themeMode === 'light' ? '🌝' : '🌚'}
    </Wrapper>
  );
}
export default ThemeToggleButton;
