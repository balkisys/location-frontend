import { useState, useEffect, useMemo } from 'react';
import { debounce } from 'lodash';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}
const BREAKPOINTS = {
  sm: 640, 
  md: 768, 
  lg: 1024, 
  xl: 1280,
  xxl: 1536,
};

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });
  const debouncedHandleResize = useMemo(
    () =>
      debounce(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 200),
    []
  );

  useEffect(() => {
    
    if (typeof window !== 'undefined') {
     
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      window.addEventListener('resize', debouncedHandleResize);

      return () => {
        window.removeEventListener('resize', debouncedHandleResize);
        debouncedHandleResize.cancel();
      };
    }
  }, [debouncedHandleResize]);

  const breakpointValues = useMemo(
    () => ({
      isMobile: windowSize.width ? windowSize.width < BREAKPOINTS.md : false,
      isTablet: windowSize.width 
        ? windowSize.width >= BREAKPOINTS.md && windowSize.width < BREAKPOINTS.lg 
        : false,
      isDesktop: windowSize.width ? windowSize.width >= BREAKPOINTS.lg : false,
    }),
    [windowSize.width]
  );

  return {
    ...windowSize,
    ...breakpointValues,
  };
}

export function useBreakpoints() {
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  return { isMobile, isTablet, isDesktop };
}

export default useWindowSize;