import { render, screen } from '@testing-library/react';
import { ThemeSwitch } from './ThemeSwitch';

test('ThemeSwitch starts in light mode', () => {
  render(<ThemeSwitch />);
  screen.getByRole('button', { name: /light mode/i });
});
