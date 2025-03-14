import { Location } from '@/types/location';

export const locationsData: Location[] = [
  {
    id: '1',
    slug: 'paris',
    city: 'PARIS',
    country: 'FRANCE',
    description: 'Paris, the City of Light, is renowned for its stunning architecture, art museums, historical monuments, and romantic ambiance. The iconic Eiffel Tower, the Louvre Museum housing the Mona Lisa, and the Gothic Notre-Dame Cathedral are just a few of the many attractions that make Paris one of the world\'s most visited cities. Stroll along the Seine River, explore charming neighborhoods like Montmartre, or enjoy French cuisine at a sidewalk café to experience the essence of Parisian life.',
    shortDescription: 'The City of Light offers iconic landmarks, world-class museums, and unparalleled charm.',
    imagePath: '/images/locations/paris.jpg',
    gridSize: 'large',
    row: 1,
    metadata: {
      date: 'June 23, 1999',
      author: 'Duis viverra',
      featured: true
    }
  },
  {
    id: '2',
    slug: 'berlin',
    city: 'BERLIN',
    country: 'GERMANY',
    description: 'Berlin, Germany\'s vibrant capital, is a city of contrasts where history meets modernity. From the remnants of the Berlin Wall and the Brandenburg Gate to contemporary art galleries and dynamic nightlife, Berlin offers a unique cultural experience. The city is known for its creative energy, diverse culinary scene, and green spaces like Tiergarten. Berlin\'s complex history is visible in its architecture, museums, and memorials, making it a fascinating destination for history enthusiasts and modern travelers alike.',
    shortDescription: 'A dynamic metropolis where historical significance meets contemporary culture and nightlife.',
    imagePath: '/images/locations/berlin.jpg',
    gridSize: 'small',
    row: 1,
    metadata: {
      date: 'July 14, 2001',
      author: 'Duis viverra'
    }
  },
  {
    id: '3',
    slug: 'buenos-aires',
    city: 'BUENOS AIRES',
    country: 'ARGENTINA',
    description: 'Buenos Aires, the cosmopolitan capital of Argentina, is often called the "Paris of South America" for its European-inspired architecture and rich cultural life. The city is known for passionate tango dancing, vibrant street art, and historic neighborhoods like San Telmo and La Boca. Visitors can enjoy world-class opera at Teatro Colón, shop in trendy Palermo, or experience the local culture through its renowned steakhouses and bustling markets. Buenos Aires combines Latin American spirit with European elegance to create a uniquely captivating atmosphere.',
    shortDescription: 'A passionate city where European elegance meets Latin American energy.',
    imagePath: '/images/locations/buenos-aires.jpg',
    gridSize: 'small',
    row: 1,
    metadata: {
      date: 'August 5, 2003',
      author: 'Duis viverra'
    }
  },
  {
    id: '4',
    slug: 'stockholm',
    city: 'STOCKHOLM',
    country: 'SWEDEN',
    description: 'Stockholm, spread across 14 islands where Lake Mälaren meets the Baltic Sea, is a city of stunning beauty and design innovation. The cobblestone streets of Gamla Stan (Old Town) showcase buildings dating back to the 13th century, while modern districts feature cutting-edge architecture and technology. Known for its commitment to sustainability, clean water, and green spaces, Stockholm offers visitors a blend of historical charm and Scandinavian modernity. The city\'s museums, palaces, and vibrant food scene make it a cultural hub of Northern Europe.',
    shortDescription: 'A stunning archipelago city where historical heritage meets Scandinavian design excellence.',
    imagePath: '/images/locations/stockholm.jpg',
    gridSize: 'small',
    row: 2,
    metadata: {
      date: 'September 19, 2005',
      author: 'Duis viverra'
    }
  },
  {
    id: '5',
    slug: 'florianopolis',
    city: 'FLORIANOPOLIS',
    country: 'BRAZIL',
    description: 'Florianópolis, located on Santa Catarina Island in southern Brazil, is a paradise for beach lovers and outdoor enthusiasts. Nicknamed "Magic Island," it features 42 distinct beaches ranging from tranquil lagoons to world-class surfing spots. The city blends natural beauty with vibrant Brazilian culture, offering visitors pristine nature preserves, traditional fishing villages, and a dynamic urban center. With its year-round pleasant climate, fresh seafood cuisine, and friendly locals, Florianópolis has become one of Brazil\'s most sought-after destinations for those seeking both relaxation and adventure.',
    shortDescription: 'Brazil\'s "Magic Island" offers 42 diverse beaches and a perfect blend of nature and culture.',
    imagePath: '/images/locations/florianopolis.jpg',
    gridSize: 'small',
    row: 2,
    metadata: {
      date: 'October 31, 2007',
      author: 'Duis viverra'
    }
  },
  {
    id: '6',
    slug: 'london',
    city: 'LONDON',
    country: 'UNITED KINGDOM',
    description: 'London, the historic capital of the United Kingdom, stands as one of the world\'s most influential cities with a history spanning two millennia. From iconic landmarks like Big Ben, Buckingham Palace, and Tower Bridge to cultural institutions such as the British Museum and Tate Modern, London offers an unparalleled blend of tradition and innovation. The city\'s diverse neighborhoods each tell their own story—from the theaters of the West End to the markets of Camden Town. With its world-class dining, green royal parks, and cultural diversity, London continues to reinvent itself while honoring its rich heritage.',
    shortDescription: 'A global metropolis where centuries of history meet contemporary innovation and diversity.',
    imagePath: '/images/locations/london.jpg',
    gridSize: 'large',
    row: 2,
    metadata: {
      date: 'November 8, 2009',
      author: 'Duis viverra',
      featured: true
    }
  }
];