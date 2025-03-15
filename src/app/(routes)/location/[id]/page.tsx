'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useLocationStore } from '@/store/location-store';
import BackButton from '@/components/common/back-button';
import { formatDate } from '@/lib/utils';
import LocationSkeleton from '@/components/ui/skeletons/location-skeleton';
import ImageCarousel from '@/components/sections/ImageCarousel';
import LocationNotFound from '../not-found';

export default function LocationDetailPage() {
  const params = useParams();
  const [slugState, setSlugState] = useState<string | null>(null);
  
  const { 
    selectedLocation, 
    isLoading, 
    error, 
    fetchLocationBySlug 
  } = useLocationStore();

  useEffect(() => {
    let extractedSlug: string | null = null;
    
    if (params) {
      if (typeof params.id === 'string') {
        extractedSlug = params.id;
      } else if (Array.isArray(params.id) && params.id.length > 0) {
        extractedSlug = params.id[0];
      }
    }
    
    if (extractedSlug) {
      setSlugState(extractedSlug);
    }
  }, [params]);

  useEffect(() => {
    console.log('État du slug:', slugState);
    
    if (slugState && !selectedLocation) {
      fetchLocationBySlug(slugState);
    } 
  }, [slugState, fetchLocationBySlug, selectedLocation?.id]);

  if (isLoading) {
    return <LocationSkeleton />;
  }

  if (error) {
    console.error('Erreur de chargement:', error);
    return <LocationNotFound />;
  }

  if (!selectedLocation) {
    return <LocationSkeleton />;
  }

  const { city, country, description, metadata, imagePath } = selectedLocation;
  const formattedDate = metadata?.date ? formatDate(metadata.date) : null;
  const author = metadata?.author || 'Unknown';

  const images = [
    {
      src: imagePath || '/placeholder-1.jpg',
      alt: `${city}, ${country}`,
      caption: city,
    },
    {
      src: '/placeholder-2.jpg',
      alt: 'Location image 2',
      caption: 'Pellentesque interdum purus felis, sit amet ullamcorper dolor mattis gravida.',
    },
    {
      src: '/placeholder-3.jpg',
      alt: 'Location image 3',
      caption: 'In non ullamcorper ex. Proin rutrum placerat tortor in sodales.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <BackButton />
        </div>

        <div className="container mx-auto px-4 mb-8">
          <div className="flex flex-col md:flex-row h-480">
            <div
              className="w-full md:w-1/2 h-full bg-valtech-sage"
              style={{
                backgroundImage: `url(${imagePath})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            <div className="w-full md:w-1/2 h-full bg-valtech-gray flex flex-col justify-center items-end p-8 text-white">
              <div className="text-sm text-gray-300 mb-2">{country}</div>
              <div className="text-2xl font-medium text-right">{city}</div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mb-8 flex justify-between text-sm text-gray-500">
          {formattedDate && <div>{formattedDate}</div>}
          <div>Author: {author}</div>
        </div>

        <div className="container mx-auto px-4 mb-12">
          <article className="prose max-w-none">
            <h1 className="text-3xl font-bold mb-6 text-valtech-black">
              {city}, {country}
            </h1>

            <p className="text-lg mb-8 text-valtech-gray">{description}</p>

            <p className="text-valtech-gray mb-8 p-12">
              Integer dignissim molestie odio quis hendrerit. Sed a nunc sit amet tellus euismod
              laoreet id ut leo. Suspendisse aliquam ipsum euismod posuere semper. Duis eros tortor,
              accumsan ut maximus vel, accumsan vitae neque. Nullam eu nibh est. Suspendisse dui
              enim, accumsan eget ullamcorper vel, dapibus at augue. Sed arcu diam, scelerisque
              lorem ut, luctus facilisis dui. Quisque vehicula purus eu hendrerit gravida.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Mauris lobortis porttitor tincidunt. Curabitur a commodo lectus, sed ultrices
              est.
            </p>
          </article>
        </div>

        <div className="container mx-auto px-4 mb-12">
          <ImageCarousel images={images} />
        </div>

        <div className="container mx-auto mb-16 p-12">
          <p className="text-valtech-gray">
            Aliquam malesuada velit nisi, quis porta massa bibendum ut. Pellentesque interdum purus
            felis, sit amet ullamcorper dolor mattis gravida. In non ullamcorper ex. Proin rutrum
            placerat tortor in sodales. Fusce egestas ac felis non egestas. Quisque id venenatis
            neque. Donec semper fermentum mi sodales efficitur. Aenean elementum facilisis velit,
            quis malesuada quam. Aenean ipsum et enim vestibulum facilisis. Aenean turpis ipsum,
            ullamcorper sed tincidunt. Nulla malesuada sed ante a maximus. Etiam luctus vulputate
            felis sit amet rhoncus.
          </p>
        </div>
      </main>
    </div>
  );
}