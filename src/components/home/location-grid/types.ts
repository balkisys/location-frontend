import { Location } from '@/types/location';

export const FEATURED_CITIES = [
  'PARIS',
  'BERLIN',
  'BUENOS AIRES',
  'STOCKHOLM',
  'FLORIANOPOLIS',
  'LONDON',
] as const;

export type FeaturedCity = (typeof FEATURED_CITIES)[number];

export interface LocationGridProps {
  locations: Location[];
  showDescription?: boolean;
  showButton?: boolean;
}

export interface DesktopLocationGridProps {
  locations: Location[];
  showDescription: boolean;
  showButton: boolean;
}

export interface GridBreakpoints {
  mobile: {
    columns: number;
    cardHeight: string;
  };
  tablet: {
    columns: number;
    cardHeight: string;
  };
  desktop: {
    cardHeight: string;
  };
}

export const DEFAULT_GRID_CONFIG: GridBreakpoints = {
  mobile: {
    columns: 1,
    cardHeight: 'h-[350px]',
  },
  tablet: {
    columns: 2,
    cardHeight: 'h-[400px]',
  },
  desktop: {
    cardHeight: 'h-[479px]',
  },
};

export interface CityLayoutConfig {
  city: FeaturedCity;
  span: number;
  position: 'top' | 'bottom';
}

export const DESKTOP_LAYOUT: CityLayoutConfig[] = [
  { city: 'PARIS', span: 6, position: 'top' },
  { city: 'BERLIN', span: 3, position: 'top' },
  { city: 'BUENOS AIRES', span: 3, position: 'top' },
  { city: 'STOCKHOLM', span: 3, position: 'bottom' },
  { city: 'FLORIANOPOLIS', span: 3, position: 'bottom' },
  { city: 'LONDON', span: 6, position: 'bottom' },
];
