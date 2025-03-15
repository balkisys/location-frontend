'use client';

import React, { useEffect } from 'react';
import { useLocationStore } from '@/store/location-store';
import LocationContent from '@/components/locations/locations-content';
import Banner from '@/components/sections/Banner';

export default function HomePage() {
  const { locations, isLoading, error, fetchLocations, fetchLocationBySlug } = useLocationStore();

  useEffect(() => {
    fetchLocations()
    return () => {};
  }, [fetchLocations]);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Banner title="Valtech" description="Custom description text goes here." />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-normal mb-8 text-valtech-black">
              Lorem ipsum dolor sit amet
            </h2>

            <LocationContent isLoading={isLoading} error={error} locations={locations} />
          </div>
        </section>
      </div>
    </main>
  );
}
