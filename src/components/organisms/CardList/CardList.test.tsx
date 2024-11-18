import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardList } from './CardList';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    value: jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
    })),
  });
});

const mockData = {
  cardList: [
    {
      url: '/card-1',
      imageSrc: '/images/card1.jpg',
      title: 'Lorem ipsum dolor sit amet',
      subTitle: 'Pellentesque lacinia mollis',
      content:
        'Cras varius vulputate neque eu consequat. Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      variant: 'primary',
    },
    {
      url: '/card-2',
      imageSrc: '/images/card2.jpg',
      title: 'Sit amet et turpis',
      subTitle: 'Lacinia mollis',
      content:
        'Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      variant: 'secondary',
    },
  ],
};

describe('CardList', () => {
  it('should render the correct number of list items', () => {
    render(<CardList data={mockData} />);
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockData.cardList.length);
  });
});