import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
  it('applies the correct variant class for primary', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /primary button/i });
    expect(buttonElement).toHaveClass('bg-orange-900');
  });

  it('applies the correct variant class for secondary', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /secondary button/i });
    expect(buttonElement).toHaveClass('bg-purple-900');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(
      <Button variant="primary" onClick={handleClick}>
        Click Me
      </Button>
    );
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});