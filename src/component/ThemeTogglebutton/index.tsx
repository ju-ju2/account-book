import { useTheme } from '../../hooks/useTheme';
import { Wrapper } from './styled';

function ToggleTheme() {
  const [themeMode, toggleTheme] = useTheme();

  return (
    <Wrapper onClick={toggleTheme}>
      {themeMode === 'light' ? '🌝' : '🌚'}
    </Wrapper>
  );
}
export default ToggleTheme;
