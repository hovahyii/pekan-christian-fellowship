'use client'

import React, { useState, useEffect } from 'react';
import PrayerCard from './PrayerCard';
import { createClient } from '@supabase/supabase-js';
import { RiPencilFill } from 'react-icons/ri';
import PrayerForm from './PrayerForm';
import PrayerCardLoadingSkeleton from './PrayerCardLoadingSkeleton'; // Import the loading skeleton

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
      // Calculate the timestamp for 3 days ago
      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  
      // Calculate the timestamp for the start of the current day
      const today = new Date();
      today.setHours(0, 0, 0, 0);
  
      const { data, error } = await supabase
        .from('prayers')
        .select('*')
        .gte('date', today.toISOString()) // Filter requests created today and later
        .order('date', { ascending: true }); // Order by creation date
      if (error) {
        throw error;
      }
  
      setPrayers(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching prayers:', error);
      setLoading(false);
    }
  };
  

  const closeForm = () => {
    setFormOpen(false);
  };

  useEffect(() => {
    const openForm = () => {
      setFormOpen(true);
    };

    const pencilIcon = document.querySelector('.pencil-icon');
    if (pencilIcon) {
      pencilIcon.addEventListener('click', openForm);
    }

    return () => {
      if (pencilIcon) {
        pencilIcon.removeEventListener('click', openForm);
      }
    };
  }, []); // Empty dependency array to indicate it should run once

  return (
    <div>
      {isFormOpen && <PrayerForm onClose={closeForm} />}

      {/* Display a floating pen icon to open the PrayerForm component */}
      <div
        className="fixed bottom-24 right-4 w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full cursor-pointer pencil-icon"
      >
       <RiPencilFill />
      </div>

      {isLoading ? (
        <PrayerCardLoadingSkeleton /> // Render the loading skeleton while data is loading
      ) : prayers.length === 0 ? (
        <p>No prayers found</p>
      ) : (
        prayers.map((prayer) => (
          <PrayerCard key={prayer.id} prayer={prayer} />
        ))
      )}
    </div>
  );
}

export default PrayerList;
