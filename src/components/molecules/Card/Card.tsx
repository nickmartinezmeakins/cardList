import React from 'react';
import { Button } from "../../atoms/Button";
import Image from 'next/image';

export interface CardData {
  imageSrc: string;
  title: string;
  subTitle: string;
  content: string;
  variant?: string;
  url?: string;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: CardData;
}

export const Card = ({ data, ...props }: CardProps) => {
  const { imageSrc, title, subTitle, content, variant = "primary", url } = data;

  const handleButtonClick = () => {
    if (url) {
      window.location.href = url; // Navigate to the URL
    }
  };

  return (
    <div
      {...props}
      className={`bg-black-200 rounded-4xl overflow-hidden h-full flex flex-col transition-transform transform hover:-translate-y-4 hover:shadow-[0_35px_60px_-15px_rgba(255,255,255,0.05)] ${variant}`}
    >
      <div className="relative h-80 w-full">
        <Image
          src={imageSrc}
          fill={true}
          style={{ objectFit: "cover" }}
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
      </div>
      <div className="p-6 flex flex-col gap-6 grow">
      {subTitle && (
        <p className="subTitle text-gray-900">{subTitle}</p>
      )}
      {title && (
        <h3 className={variant === "primary" ? "text-orange" : "text-purple"}>{title}</h3>
      )}
      {content && (
        <p>{content}</p>
      )}
        {url && (
          <div className="flex justify-end mt-auto">
            <Button
              variant={variant === "primary" ? "primary" : "secondary"}
              onClick={handleButtonClick}
            >
              Start
              <Image
                src="/icons/icon-support.svg"
                alt="Support Icon"
                width={16}
                height={16}
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};