'use client';

import React from 'react';
const LocationSkeleton: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-6">
        <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row h-480">
          <div className="w-full md:w-1/2 h-64 md:h-full bg-gray-200 animate-pulse"></div>

          <div className="w-full md:w-1/2 h-64 md:h-full bg-gray-300 flex flex-col justify-center items-end p-8">
            <div className="h-4 w-32 bg-gray-400 rounded mb-4 animate-pulse self-end"></div>
            <div className="h-8 w-64 bg-gray-400 rounded animate-pulse self-end"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-8 flex justify-between">
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 mb-12">
        <div className="animate-pulse space-y-4">
          <div className="h-10 w-3/4 bg-gray-200 rounded"></div>
          <div className="h-6 w-full bg-gray-200 rounded"></div>
          <div className="h-32 w-full bg-gray-200 rounded p-12"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-12">
        <div className="relative h-96 md:h-480 bg-gray-200 animate-pulse flex items-center justify-between">
          <div className="p-4 bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center"></div>
          <div className="absolute bottom-1 right-8 pb-8">
            <div className="h-20 w-64 bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div className="p-4 bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center"></div>
        </div>
      </div>

      <div className="container mx-auto mb-16 p-12">
        <div className="space-y-4 animate-pulse">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
        </div>
      </div>
    </main>
  </div>
);

export default LocationSkeleton;
