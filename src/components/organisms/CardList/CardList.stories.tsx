import type { Meta, StoryObj } from '@storybook/react';
import { CardList } from './CardList';

const fullMockData = {
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
    {
      url: '/card-3',
      imageSrc: '/images/card3.jpg',
      title: 'Card 3 Title',
      subTitle: 'Card 3 Subtitle',
      content: 'This is the content for the third card.',
      variant: 'primary',
    },
  ],
};

const meta: Meta<typeof CardList> = {
  title: 'Organisms/CardList',
  component: CardList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CardList>;

export const OneItem: Story = {
  args: {
    data: {
      cardList: fullMockData.cardList.slice(0, 1),
    },
  },
};

export const TwoItems: Story = {
  args: {
    data: {
      cardList: fullMockData.cardList.slice(0, 2),
    },
  },
};

export const ThreeItems: Story = {
  args: {
    data: {
      cardList: fullMockData.cardList.slice(0, 3),
    },
  },
};