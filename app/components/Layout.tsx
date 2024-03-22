'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaCalendar, FaInfoCircle, FaBlog } from 'react-icons/fa';
import { GiMusicalNotes } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";



interface LayoutProps {
  children: React.ReactNode;
}



const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activePage, setActivePage] = useState<string>(''); // Initialize the activePage state

  useEffect(() => {
    // Use the window location to determine the active page
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Mobile app-like bottom navigation bar */}
      <div className="fixed bottom-0 w-full bg-[#142a59] p-4 flex justify-evenly  z-10">
        <Link href="/events"
          className={`text-white flex flex-col items-center ${
            activePage === '/events' ? 'active' : ''
          }`}
        >
          <FaCalendar
            size={24}
            color={activePage === '/events' ? '#ffcc00' : 'white'} // Change icon color
          />
          <span
            style={{
              color: activePage === '/events' ? '#ffcc00' : 'white', // Change text color
            }}
          >
            Events
          </span>
        </Link>
        <Link href="/praise-and-worship"
          className={`text-white flex flex-col items-center ${
            activePage === '/prayers' ? 'active' : ''
          }`}
        >
          <GiMusicalNotes
            size={24}
            color={activePage === '/praise-and-worship' ? '#ffcc00' : 'white'} // Change icon color
          />
          <span
            style={{
              color: activePage === '/praise-and-worship' ? '#ffcc00' : 'white', // Change text color
            }}
          >
            Songs
          </span>
        </Link>

        <Link href="/devotion"
          className={`text-white flex flex-col items-center ${
            activePage === '/devotion' ? 'active' : ''
          }`}
        >
          <GiSlicedBread 
            size={24}
            color={activePage === '/devotion' ? '#ffcc00' : 'white'} // Change icon color
          />
          <span
            style={{
              color: activePage === '/devotion' ? '#ffcc00' : 'white', // Change text color
            }}
          >
            Devotion
          </span>
        </Link>
        <Link href="/blogs"
          className={`text-white flex flex-col items-center ${
            activePage === '/blogs' ? 'active' : ''
          }`}
        >
          <FaBlog
            size={24}
            color={activePage === '/blogs' ? '#ffcc00' : 'white'} // Change icon color
          />
          <span
            style={{
              color: activePage === '/blogs' ? '#ffcc00' : 'white', // Change text color
            }}
          >
            Blogs
          </span>
        </Link>
        <Link href="/about"
          className={`text-white flex flex-col items-center ${
            activePage === '/about' ? 'active' : ''
          }`}
        >
          <FaInfoCircle
            size={24}
            color={activePage === '/about' ? '#ffcc00' : 'white'} // Change icon color
          />
          <span
            style={{
              color: activePage === '/about' ? '#ffcc00' : 'white', // Change text color
            }}
          >
            About
          </span>
        </Link>
      </div>

      {/* Content */}
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
