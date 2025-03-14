'use client';

import React, { useState } from 'react';
import { Location } from '@/types/location';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface LocationCardProps {
  location: Location;
  className?: string;
  showDescription?: boolean;
  showButton?: boolean;
  buttonVariant?: 'primary' | 'default';
}

const LocationCard: React.FC<LocationCardProps> = ({
  location,
  className = '',
  showDescription = false,
  showButton = true,
  buttonVariant = 'default',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const router = useRouter();

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const slug = location.slug || location.city.toLowerCase();

    router.push(`/location/${slug}`);
  };

  return (
    <div
      className={`bg-valtech-sage h-[479px] flex flex-col ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 flex flex-col h-full items-center justify-center text-center">
        <p className="text-center text-valtech-black font-medium text-base leading-[120%] tracking-[0%] mb-1">
          {location.country}
        </p>

        <h3 className="text-xl font-bold mb-4">{location.city}</h3>
        {(showDescription || isHovered) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center text-valtech-black font-normal text-base leading-[140%] tracking-[0%] mb-6 max-w-[250px]"
          >
            {location.shortDescription}
          </motion.p>
        )}

        {showButton && isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[250px]"
          >
            <button
              className={`w-full py-3 px-4 text-center transition-colors ${
                buttonVariant === 'primary' || isButtonHovered
                  ? 'bg-valtech-red text-white hover:bg-red-600'
                  : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
              }`}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              onClick={handleButtonClick}
            >
              Explore More
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LocationCard;
