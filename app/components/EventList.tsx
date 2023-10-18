
'use client'
import { useState, useEffect } from 'react';
import EventCard from './EventCard'; // Import the EventCard component
import { createClient } from '@supabase/supabase-js';

function EventList() {
  const [events, setEvents] = useState<{
    id: number;
    title: string;
    date: string;
    time: string;
    venue: string;
    description?: string;
    imageUrl: string;
  }[]>([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchEventsFromSupabase();
  }, []);

  const fetchEventsFromSupabase = async () => {
    // Replace these values with your Supabase URL and key
    const supabaseUrl = process.env.SUPABASE_URL || ''
    const supabaseKey = process.env.SUPABASE_KEY || ''
    const supabase = createClient(supabaseUrl, supabaseKey)

    try {
      const { data, error } = await supabase.from('events').select('*');
      if (error) {
        throw error;
      }

      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (events.length === 0) return <p>No events found</p>;

  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;
