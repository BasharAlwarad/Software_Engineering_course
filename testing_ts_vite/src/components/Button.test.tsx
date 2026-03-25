import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('testing button increment', () => {
  it('testing document text', () => {
    render(<Button />);
    expect(screen.getByText('Increment')).toBeInTheDocument();
  });

  it('button increments', async () => {
    render(<Button />);
    const button = screen.getByRole('button', { name: /Increment/i });
    const counterValue = screen.getByTestId('counter');
    expect(counterValue.textContent).toBe('0');
    await userEvent.click(button);
    expect(counterValue.textContent).toBe('1');
  });
});
