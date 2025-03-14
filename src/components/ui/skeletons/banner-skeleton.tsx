'use client';

import React from 'react';
import clsx from 'clsx';

interface BannerSkeletonProps {
  isMobile: boolean;
  isTablet: boolean;
}

const BannerSkeleton = React.memo(({ isMobile, isTablet }: BannerSkeletonProps) => {
  return (
    <div className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4">
        {isMobile ? (
          <div className="bg-[#F5F4F1] w-full p-6">
            <div className="h-48 bg-gray-200 animate-pulse mb-6 mx-auto"></div>
            <div className="h-8 bg-gray-200 w-3/4 mb-4 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 w-full animate-pulse"></div>
              <div className="h-3 bg-gray-200 w-5/6 animate-pulse"></div>
              <div className="h-3 bg-gray-200 w-full animate-pulse"></div>
            </div>
          </div>
        ) : (
          <div className="bg-[#F5F4F1] w-full h-[400px] md:h-[480px] relative">
            <div
              className={clsx(
                'absolute top-[-20px] md:top-[-40px] h-[320px] md:h-[560px] w-[180px] md:w-[320px] bg-gray-200 animate-pulse',
                isTablet ? 'left-8' : 'left-16'
              )}
            ></div>

            <div
              className={clsx(
                'absolute top-1/2 transform -translate-y-1/2 w-1/2 text-right',
                isTablet ? 'right-8' : 'right-16'
              )}
            >
              <div className="h-8 md:h-12 bg-gray-200 w-3/4 ml-auto mb-4 md:mb-6 animate-pulse"></div>
              <div className="space-y-2 md:space-y-3">
                <div className="h-3 md:h-4 bg-gray-200 w-full animate-pulse"></div>
                <div className="h-3 md:h-4 bg-gray-200 w-full animate-pulse"></div>
                <div className="h-3 md:h-4 bg-gray-200 w-5/6 ml-auto animate-pulse"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default BannerSkeleton;
