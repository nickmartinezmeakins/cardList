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
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!prefersReducedMotion) {
      animate(
        '.card-animation',
        // @ts-expect-error: Animate expects specific properties
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
    }
  }, []);


  return (
    <ul 
      className="flex flex-col lg:flex-row w-full gap-5 lg:gap-16 p-8"
      role="list"
      aria-label="List of cards"
    >
      {cardList.map((card, index) => (
        <li 
          className="w-full card-animation" 
          key={index} 
          role="listitem"
          aria-labelledby={`card-title-${index}`}
        >
          <Card 
            data={card} 
            id={`card-title-${index}`} 
          />
        </li>
      ))}
    </ul>
  );
};