export type LocationSize = 'small' | 'large';
export type LocationRow = 1 | 2;

export interface Location {
  id: string;
  slug: string;
  city: string;
  country: string;
  description: string;
  shortDescription?: string;
  imagePath: string;
  gridSize: LocationSize;
  row: LocationRow;
  metadata?: LocationMetadata;
}

export interface LocationMetadata {
  date?: string;
  author?: string;
  tags?: string[];
  featured?: boolean;
}

export interface LocationCardProps {
  location: Location;
  className?: string;
  showDescription?: boolean;
  showButton?: boolean;
  buttonVariant?: 'default' | 'primary';
}

export interface LocationDetailProps {
  location: Location;
}

export interface LocationServiceResponse {
  data: Location[];
  error?: string;
  loading: boolean;
}