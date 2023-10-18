import { LayoutProps } from '@/.next/types/app/layout';
import Link from 'next/link';
import { FaCalendar, FaPrayingHands, FaInfoCircle } from 'react-icons/fa'; // Example icons from react-icons

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Mobile app-like bottom navigation bar */}
      <div className="fixed bottom-0 w-full bg-blue-500 p-4 flex justify-evenly">
        <Link href="/events" className="text-white flex flex-col items-center">
          <FaCalendar size={24} />
          Events
        </Link>
        <Link href="/prayers" className="text-white flex flex-col items-center">
          <FaPrayingHands size={24} />
          Prayer
        </Link>
        <Link href="/about" className="text-white flex flex-col items-center">
          <FaInfoCircle size={24} />
          About
        </Link>
      </div>

      {/* Content */}
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
