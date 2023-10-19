
'use client'
import React from 'react';
import EventCard from './EventCard'; // Import the EventCard component
import { createClient } from '@supabase/supabase-js';
import EventCardLoadingSkeleton from './EventCardLoadingSkeleton';


function EventList() {
  const [events, setEvents] = React.useState([]); // Initialize as an empty array
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchEventsFromSupabase();
  }, []);

  const fetchEventsFromSupabase = async () => {
    // Replace these values with your Supabase URL and key
    const supabaseUrl = process.env.SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

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

  if (isLoading) return <EventCardLoadingSkeleton />;
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
