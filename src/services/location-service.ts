import { locationsData } from '@/mock/data/locations';
import { Location, LocationServiceResponse } from '@/types/location';

// Simulate API calls with a small delay to mimic real API behavior
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getAllLocations = async (): Promise<LocationServiceResponse> => {
  try {
    await delay(300);
    return {
      data: locationsData,
      loading: false,
    };
  } catch (error) {
    return {
      data: [],
      error: (error as Error).message || 'Failed to fetch locations',
      loading: false,
    };
  }
};

export const getLocationBySlug = async (slug: string): Promise<Location | null> => {
  try {
    // Simulate network delay
    await delay(200);

    const location = locationsData.find(loc => loc.slug === slug);

    if (!location) {
      throw new Error(`Location with slug "${slug}" not found`);
    }

    return location;
  } catch (error) {
    console.error(`Error fetching location by slug ${slug}:`, error);
    return null;
  }
};
