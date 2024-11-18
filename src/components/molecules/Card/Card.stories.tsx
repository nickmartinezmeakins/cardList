import { Meta, StoryObj } from '@storybook/react';
import { Card, CardProps } from './Card';

// Mock data for the Card
const mockCardData = {
  url: '/card-1',
  imageSrc: '/images/card1.jpg',
  title: 'Lorem ipsum dolor sit amet',
  subTitle: 'Pellentesque lacinia mollis',
  content:
    'Cras varius vulputate neque eu consequat. Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  variant: 'primary',
};

export default {
  title: 'Molecules/Card',
  component: Card,
} as Meta<typeof Card>;

export const Default: StoryObj<CardProps> = {
  args: {
    data: mockCardData,
  },
};