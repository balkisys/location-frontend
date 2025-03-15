import { create } from 'zustand';
import { Location } from '@/types/location';
import { locationsData } from '@/mock/data/locations';


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

const getLocationBySlug = (slug: string): Location | null => {
  
  if (!slug) {
    console.warn('Service direct: slug vide ou undefined');
    return null;
  }
    const location = locationsData.find(loc => loc.slug === slug);
  
  console.log('Service direct: location trouvée?', !!location);
  if (location) {
    console.log('Service direct: ville trouvée:', location.city);
  }
  
  return location || null;
};

export const useLocationStore = create<LocationState>((set, get) => ({
  locations: [],
  featuredLocations: [],
  selectedLocation: null,
  isLoading: false,
  error: null,

  fetchLocations: async () => {
    set({ isLoading: true, error: null });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const featuredLocations = locationsData.filter(loc => loc.metadata?.featured);
      
      set({
        locations: locationsData,
        featuredLocations,
        isLoading: false,
        error: null
      });
      
    } catch (error) {
      console.error('Store: erreur dans fetchLocations', error);
      set({
        error: (error as Error).message || 'Erreur lors du chargement des destinations',
        isLoading: false
      });
    }
  },
  
  fetchLocationBySlug: async (slug: string) => {
    
    if (!slug) {
      console.warn('Store: fetchLocationBySlug appelé avec un slug vide');
      set({ 
        error: 'Slug de destination invalide', 
        isLoading: false,
        selectedLocation: null
      });
      return;
    }
    
    set({ isLoading: true, error: null });
    
    try {
      const location = getLocationBySlug(slug);      
      if (location) {
        set({ 
          selectedLocation: location, 
          isLoading: false,
          error: null 
        });
      } else {
        set({ 
          error: `Destination "${slug}" introuvable`, 
          isLoading: false,
          selectedLocation: null
        });
      }
    } catch (error) {
      console.error('Store: exception dans fetchLocationBySlug', error);
      set({
        error: (error as Error).message || `Erreur lors du chargement de la destination "${slug}"`,
        isLoading: false,
        selectedLocation: null
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