import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-valtech-black mb-4">404 | Page Not Found</h1>
      <p className="text-lg text-valtech-gray mb-8">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-valtech-red text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
