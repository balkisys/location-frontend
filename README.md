# Valtech Frontend Project

## Overview
This project is a Next.js application for Valtech that provides location-based information display.

## Technologies
- **Framework**: Next.js 15.2.1
- **React**: 18.2.0
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: For type safety

## Getting Started

### Prerequisites
- Node.js (latest LTS version recommended)
- npm or yarn

### Installation
1. Clone the repository
   ```
   git clone <repository-url>
   cd valtech-frontend
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

## Scripts
- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

## Project Structure
```
/
├── components/        # Reusable UI components
│   ├── common/        # Shared components like buttons, etc.
│   ├── sections/      # Larger section components
│   └── ui/            # Basic UI elements and skeletons
├── lib/               # Utility functions and helpers
├── pages/             # Route definitions
├── public/            # Static assets
├── store/             # Zustand state management
│   └── location-store.ts # Stores location data and fetch logic
└── styles/            # Global styles
```


## Linting and Formatting
- ESLint for code linting
- Prettier for code formatting

## License
This project is private and proprietary to Valtech.