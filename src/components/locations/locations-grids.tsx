'use client';

import React, { useMemo } from 'react';
import { Location } from '@/types/location';
import LocationCard from '@/components/cards/location-card';
import { LocationGridProps, FEATURED_CITIES, DEFAULT_GRID_CONFIG } from './types';
import LocationGridSkeleton from '@/components/ui/skeletons/location-grid-skeleton';
import DesktopLocationGrid from './desktop-locations-grid';

const LocationGrids: React.FC<LocationGridProps> = ({
  locations,
  showDescription = false,
  showButton = true,
}) => {
  const featuredLocations = useMemo(() => {
    if (!locations?.length) return null;

    const locationMap = new Map<string, Location>();
    locations.forEach(location => {
      locationMap.set(location.city, location);
    });

    return FEATURED_CITIES.map(city => locationMap.get(city)).filter(Boolean) as Location[];
  }, [locations]);

  if (!locations?.length) {
    return <LocationGridSkeleton />
  }

  const { mobile, tablet } = DEFAULT_GRID_CONFIG;

  const renderResponsiveGrid = (columns: number, cardHeight: string) => (
    <div className={`grid grid-cols-${columns} gap-4`}>
      {featuredLocations?.map(location => (
        <div key={location.id} className="mb-4">
          <LocationCard
            location={location}
            className={cardHeight}
            showDescription={showDescription}
            showButton={showButton}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full">
      <div className="block md:hidden">
        {renderResponsiveGrid(mobile.columns, mobile.cardHeight)}
      </div>

      <div className="hidden md:block lg:hidden">
        {renderResponsiveGrid(tablet.columns, tablet.cardHeight)}
      </div>

      <div className="hidden lg:block">
        <DesktopLocationGrid
          locations={featuredLocations || []}
          showDescription={showDescription}
          showButton={showButton}
        />
      </div>
    </div>
  );
};

export default LocationGrids;
