'use client';

import React from 'react';
import Image from 'next/image';
import Carousel from './carousel';

interface ImageItem {
  src: string;
  alt: string;
  caption: string;
}

interface ImageCarouselProps {
  images: ImageItem[];
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className }) => {
  if (!images || images.length === 0) {
    return null;
  }

  const items = images.map((image, index) => ({
    id: `image-${index}`,
    content: (
      <div className="relative w-full h-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 75vw"
          className="object-cover"
          priority={index === 0}
        />
        
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 p-4 flex justify-end">
          <div className="text-right text-sm text-white max-w-md">
            {image.caption}
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div className="h-480 bg-valtech-sage">
      <Carousel items={items} className={className} />
    </div>
  );
};

export default ImageCarousel;