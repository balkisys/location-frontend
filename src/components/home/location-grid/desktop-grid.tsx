'use client';

import React from 'react';
import { Location } from '@/types/location';
import LocationCard from '@/components/cards/location-card';
import {
  DesktopLocationGridProps,
  FeaturedCity,
  DESKTOP_LAYOUT,
  DEFAULT_GRID_CONFIG,
} from './types';

const DesktopLocationGrid: React.FC<DesktopLocationGridProps> = ({
  locations,
  showDescription,
  showButton,
}) => {
  const getLocationByCity = (city: FeaturedCity): Location | undefined => {
    return locations.find(loc => loc.city === city);
  };

  const topRowItems = DESKTOP_LAYOUT.filter(item => item.position === 'top');
  const bottomRowItems = DESKTOP_LAYOUT.filter(item => item.position === 'bottom');

  const renderGridRow = (layoutItems: typeof DESKTOP_LAYOUT) => (
    <div className="grid grid-cols-12 gap-4">
      {layoutItems.map(layout => {
        const location = getLocationByCity(layout.city);
        if (!location) return null;
        return (
          <div
            key={location.id}
            className={`col-span-${layout.span}`}
            style={{ gridColumn: `span ${layout.span} / span ${layout.span}` }}
          >
            <LocationCard
              location={location}
              className={DEFAULT_GRID_CONFIG.desktop.cardHeight}
              showDescription={showDescription}
              showButton={showButton}
            />
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <div className="mb-4">{renderGridRow(topRowItems)}</div>
      {renderGridRow(bottomRowItems)}
    </>
  );
};

export default DesktopLocationGrid;
