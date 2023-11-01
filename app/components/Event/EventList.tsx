'use client'
import React from 'react';
import { createClient } from '@supabase/supabase-js';
import EventCardLoadingSkeleton from './EventCardLoadingSkeleton';
import { UpcomingEventCard, PastEventCard } from './EventCard';
import Image from 'next/image';

function EventList() {
  const [events, setEvents] = React.useState([]);
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

  // Separate events into upcoming and past events based on the date
  const currentDate = new Date();

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= currentDate;
  });

  const pastEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate < currentDate;
  });

  return (
<div className="overflow-y-auto mb-20">
      <h2 className="font-bold text-2xl text-center">Upcoming Events</h2>

      {upcomingEvents.length > 0 && (
        <div>
          {upcomingEvents.map((event) => (
            <UpcomingEventCard key={event.id} event={event} />
          ))}
        </div>
      )}
      {upcomingEvents.length === 0 && <p>No events</p>}

      {upcomingEvents.length > 0 && <div style={{ margin: '20px 0' }}></div>}

      {pastEvents.length > 0 && (
        <div>
          <h2 className="font-bold text-2xl text-center mt-20">Past Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white border rounded shadow-md p-4">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  width="1000"
                  height="1000"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {pastEvents.length === 0 && <p>No past events</p>}
    </div>
  );
}

export default EventList;
