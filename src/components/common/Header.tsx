import Image from 'next/image';

export const Header = () => {
  return (
    <header style={{ backgroundColor: '#FF5959', padding: '1.5rem 0' }} className="w-full">
      <div className="container mx-auto px-4">
        <div className="ml-8">
          <Image
            src="/images/Valtech-logo.png"
            alt="Valtech Logo"
            width={125}
            height={25}
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
};
