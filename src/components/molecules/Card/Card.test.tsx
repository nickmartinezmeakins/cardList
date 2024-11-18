import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card, CardData } from './Card';

describe('Card Component', () => {
  const mockCardData: CardData = {
    imageSrc: '/images/card1.jpg',
    title: 'Test Title',
    subTitle: 'Test Subtitle',
    content: 'This is test content for the card.',
    variant: 'primary',
    url: 'https://example.com',
  };

  it('renders the card with the correct title, subtitle, and content', () => {
    render(<Card data={mockCardData} />);
    expect(screen.getByText(/test title/i)).toBeInTheDocument();
    expect(screen.getByText(/test subtitle/i)).toBeInTheDocument();
    expect(screen.getByText(/this is test content for the card./i)).toBeInTheDocument();
  });  
});