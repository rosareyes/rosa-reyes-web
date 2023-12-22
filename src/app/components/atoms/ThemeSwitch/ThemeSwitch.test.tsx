import { render, screen } from '@testing-library/react';
import { ThemeSwitch } from './ThemeSwitch';

test('ThemeSwitch starts in light mode', () => {
  render(<ThemeSwitch />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toHaveClass('bg-[#00553D]');
});
