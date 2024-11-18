'use client';
import React, { useEffect } from 'react';
import { animate, stagger } from "motion";
import { Card } from "../../molecules/Card";
import { CardData } from '../../../types/card';

interface CardListProps {
  data: { cardList: CardData[] };
}

export const CardList: React.FC<CardListProps> = ({ data }) => {
  const { cardList } = data;

  useEffect(() => {
animate(
  '.card-animation',
  /* eslint-disable @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  {
    opacity: [0, 1],
    transform: ['translateY(100px)', 'translateY(0px)'],
  },
  {
    delay: stagger(0.1),
    duration: 0.5,
    easing: [0.22, 0.03, 0.26, 1],
  }
);
  }, []);

  return (
    <ul className="flex flex-col lg:flex-row w-full gap-5 lg:gap-16 p-8">
      {cardList.map((card, index) => (
        <li className="w-full card-animation" key={index}>
          <Card data={card} />
        </li>
      ))}
    </ul>
  );
};