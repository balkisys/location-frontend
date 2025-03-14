'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useBreakpoints } from '@/hooks/useWindowSize';
import clsx from 'clsx';
import BannerSkeleton from '../ui/skeletons/banner-skeleton';

interface BannerProps {
  title?: string;
  description?: string;
  isLoading?: boolean;
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export const Banner: React.FC<BannerProps> = React.memo(
  ({
    title = 'Valtech',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac risus id massa posuere vehicula. Vivamus vitae cursus lectus. Donec interdum mi nulla, in consequat ex fringilla tristique. Fusce auctor leo sit amet consequat eleifend. Ut vitae volutpat sem. Aenean a bibendum turpis. Aliquam quis massa orci.',
    isLoading = false,
  }) => {
    const { isMobile, isTablet } = useBreakpoints();

    const mobileContent = useMemo(
      () => (
        <section className="w-full py-8">
          <div className="container mx-auto px-4">
            <div className="bg-[#F5F4F1] w-full p-6">
              <motion.div
                className="h-48 bg-[#D1D3CA] w-full mb-6"
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
              ></motion.div>

              <div className="text-center">
                <motion.h1
                  className="text-3xl font-bold mb-4 text-gray-900"
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {title}
                </motion.h1>

                <motion.p
                  className="text-gray-700 text-sm"
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.2}
                >
                  {description}
                </motion.p>
              </div>
            </div>
          </div>
        </section>
      ),
      [title, description]
    );

    const desktopContent = useMemo(
      () => (
        <section className="w-full py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="relative bg-[#F5F4F1] w-full h-[400px] md:h-[480px] overflow-visible">
              <motion.div
                className={clsx(
                  'absolute top-[-20px] md:top-[-40px] h-[460px] md:h-[560px] w-[240px] md:w-[320px] bg-[#D1D3CA]',
                  isTablet ? 'left-8' : 'left-16'
                )}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              ></motion.div>

              <div
                className={clsx(
                  'absolute top-1/2 transform -translate-y-1/2 w-1/2',
                  isTablet ? 'right-8' : 'right-16'
                )}
              >
                <div className="text-right">
                  <motion.h1
                    className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {title}
                  </motion.h1>

                  <motion.p
                    className="text-gray-700 text-xs md:text-base"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                  >
                    {description}
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
      [title, description, isTablet]
    );

    if (isLoading) {
      return <BannerSkeleton isMobile={isMobile} isTablet={isTablet} />;
    }

    return isMobile ? mobileContent : desktopContent;
  }
);

export default Banner;
