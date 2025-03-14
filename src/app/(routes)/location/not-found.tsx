import Link from 'next/link';

export default function LocationNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-valtech-black mb-4">Location Not Found</h1>
      <p className="text-lg text-valtech-gray mb-8">
        Sorry, the location you are looking for doesn't exist in our database.
      </p>
      <Link
        href="/locations"
        className="bg-valtech-red text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors"
      >
        View All Locations
      </Link>
    </div>
  );
}
