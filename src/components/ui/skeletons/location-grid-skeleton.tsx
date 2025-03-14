import React from 'react';

const LocationGridSkeleton: React.FC = () => (
  <div className="w-full space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-6 h-64 bg-valtech-light rounded"></div>
      <div className="md:col-span-3 h-64 bg-valtech-light rounded"></div>
      <div className="md:col-span-3 h-64 bg-valtech-light rounded"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-3 h-64 bg-valtech-light rounded"></div>
      <div className="md:col-span-3 h-64 bg-valtech-light rounded"></div>
      <div className="md:col-span-6 h-64 bg-valtech-light rounded"></div>
    </div>
  </div>
);

export default LocationGridSkeleton;
