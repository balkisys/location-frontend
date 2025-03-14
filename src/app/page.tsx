'use client';

import React, { useEffect } from 'react';
import Banner from '@/components/home/Banner';
import LocationGridSkeleton from '@/components/ui/skeletons/location-grid-skeleton';
import ErrorMessage from '@/components/ui/error-message';
import LocationGrid from '@/components/home/location-grid';
import { useLocationStore } from '@/store/location-store';

export default function HomePage() {
  const { locations, isLoading, error, fetchLocations, fetchLocationBySlug } = useLocationStore();
  useEffect(() => {
    fetchLocations();
    fetchLocationBySlug('paris')
  }, []);
  const renderContent = () => {
    if (isLoading) return <LocationGridSkeleton />;

    if (error) return <ErrorMessage message="Error loading locations. Please try again later." />;

    return <LocationGrid locations={locations} showDescription={false} showButton={true} />;
  };

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Banner title="Valtech" description="Custom description text goes here." />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-normal mb-8 text-valtech-black">
              Lorem ipsum dolor sit amet
            </h2>

            {renderContent()}
          </div>
        </section>
      </div>
    </main>
  );
}
