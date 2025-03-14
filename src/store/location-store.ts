import { create } from 'zustand';
import { Location } from '@/types/location';
import { 
  getAllLocations, 
  getLocationBySlug, 
} from '@/services/location-service';

interface LocationState {
  locations: Location[];
  featuredLocations: Location[];
  selectedLocation: Location | null;
  isLoading: boolean;
  error: string | null;

  fetchLocations: () => Promise<void>;
  fetchLocationBySlug: (slug: string) => Promise<void>;
  
  resetSelectedLocation: () => void;
  resetError: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  locations: [],
  featuredLocations: [],
  selectedLocation: null,
  isLoading: false,
  error: null,

  fetchLocations: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await getAllLocations();
      set({ 
        locations: response.data, 
        isLoading: false,
        error: response.error || null 
      });
    } catch (error) {
      set({ 
        error: (error as Error).message || 'Failed to fetch locations', 
        isLoading: false 
      });
    }
  },



  fetchLocationBySlug: async (slug: string) => {
    console.log('hiiiii')
    set({ isLoading: true, error: null });
    try {
      const location = await getLocationBySlug(slug);
      if (!location) {
        throw new Error(`Location with slug "${slug}" not found`);
      }
      set({ selectedLocation: location, isLoading: false });
    } catch (error) {
      set({ 
        error: (error as Error).message || `Failed to fetch location with slug "${slug}"`, 
        isLoading: false 
      });
    }
  },

  resetSelectedLocation: () => {
    set({ selectedLocation: null });
  },

  resetError: () => {
    set({ error: null });
  }
}));