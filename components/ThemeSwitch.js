// import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <input
      id="toggle"
      className="toggle"
      type="checkbox"
      checked={theme === 'light'}
      data-checked={true}
      onChange={() => {
        if (theme === 'light') {
          setTheme('dark');

          return;
        }

        return setTheme('light');
      }}
    />
  );
}
