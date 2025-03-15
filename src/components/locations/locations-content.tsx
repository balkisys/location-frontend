'use client';

import React from 'react';
import LocationGridSkeleton from '@/components/ui/skeletons/location-grid-skeleton';
import ErrorMessage from '@/components/ui/error-message';
import { Location } from '@/types/location';
import LocationGrids from './locations-grids';

interface LocationContentProps {
  isLoading: boolean;
  error: string | null;
  locations: Location[];
}

const LocationContent = React.memo(({ isLoading, error, locations }: LocationContentProps) => {
  if (isLoading) return <LocationGridSkeleton />;

  if (error) return <ErrorMessage message="Error loading locations. Please try again later." />;

  return <LocationGrids locations={locations} showDescription={false} showButton={true} />;
});

LocationContent.displayName = 'LocationContent';

export default LocationContent;
