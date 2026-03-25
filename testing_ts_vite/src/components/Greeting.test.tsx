import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Greeting from './Greeting';

describe('testing Greeting component', () => {
  it('testing when using a param', () => {
    render(<Greeting name="John" />);
    expect(screen.getByText('Hello John')).toBeInTheDocument();
  });
  it('testing without a param', () => {
    render(<Greeting />);
    expect(screen.getByText('Hello Bashar')).toBeInTheDocument();
    expect(screen.queryByText('Hello Bashar')).toBeInTheDocument();
  });
});
