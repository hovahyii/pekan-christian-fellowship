'use client'

import { useState, useEffect } from 'react';
import PrayerCard from './PrayerCard';
import { createClient } from '@supabase/supabase-js';
import { RiPencilFill } from 'react-icons/ri';
import PrayerForm from './PrayerForm';

function PrayerList() {
  const [prayers, setPrayers] = useState<{
    id: number;
    name: string;
    date: string;
    profileImage: string;
    prayerRequest: string;
  }[]>([]);

  const [isFormOpen, setFormOpen] = useState(false);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchPrayersFromSupabase();
  }, []);

  const fetchPrayersFromSupabase = async () => {
    // Replace these values with your Supabase URL and key
    const supabaseUrl = process.env.SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
      const { data, error } = await supabase.from('prayers').select('*');
      if (error) {
        throw error;
      }

      setPrayers(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching prayers:', error);
      setLoading(false);
    }
  }


  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  // Add an event listener to open the form when the icon is clicked
  useEffect(() => {
    const pencilIcon = document.querySelector('.pencil-icon');

    if (pencilIcon) {
      pencilIcon.addEventListener('click', openForm);
    }

    return () => {
      if (pencilIcon) {
        pencilIcon.removeEventListener('click', openForm);
      }
    };
  }, [openForm]);




  return (
    <div>
      {isFormOpen && <PrayerForm onClose={closeForm} />}

      {/* Display a floating pen icon to open the PrayerForm component */}
      <div
        className="fixed bottom-20 right-4 w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full cursor-pointer pencil-icon"
      >
        <RiPencilFill size="1.5rem" />
      </div>

      {isLoading && <p>Loading...</p>}
      {prayers.map((prayer) => (
        <PrayerCard key={prayer.id} prayer={prayer} />
      ))}
    </div>
  );
}

export default PrayerList;
