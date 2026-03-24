import React from 'react';

import { render, screen } from '@testing-library/react';

import Greeting from './Greetings';
import { describe, it, expect } from 'vitest';

describe('Greeting component', () => {
  it('testing without value', () => {
    render(<Greeting />);
    expect(screen.getByText('Hello Bashar')).toBeInTheDocument();
  });
  it('testing with value', () => {
    render(<Greeting name="John" />);
    expect(screen.getByText('Hello John')).toBeInTheDocument();
  });
});
