'use client'
import React from 'react';
import { createClient } from '@supabase/supabase-js';
import EventCardLoadingSkeleton from './EventCardLoadingSkeleton';
import { UpcomingEventCard, PastEventCard } from './EventCard';
import Image from 'next/image';
import Head from 'next/head';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  imageUrl: string;
  venue: string;
  description: string;
}


function EventList() {
  const [events, setEvents] = React.useState<Event[]>([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchEventsFromSupabase();
  }, []);

  const fetchEventsFromSupabase = async () => {
    // Replace these values with your Supabase URL and key
    const supabaseUrl = process.env.SUPABASE_URL || "";
    const supabaseKey = process.env.SUPABASE_KEY || "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
      const { data, error } = await supabase.from("events").select("*");
      if (error) {
        throw error;
      }

      // Set the events with the correct type
      setEvents(data as Event[]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  };

  if (isLoading) return <EventCardLoadingSkeleton />;
  if (events.length === 0) return <p>No events found</p>;

  // Separate events into upcoming and past events based on the date
  const currentDate = new Date();

  const upcomingEvents: Event[] = [];
  const pastEvents: Event[] = [];

  
events.forEach((event: Event) => {
    const eventDate = new Date(event.date);
    if (eventDate > currentDate) {
      upcomingEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  });
  // Check if there are any events happening today
  const todayEvents = events.filter((event: Event) => {
    const eventDate = new Date(event.date);
    return eventDate.toDateString() === currentDate.toDateString();
  });

  // If there are events happening today, add them to upcoming events
  if (todayEvents.length > 0) {
    upcomingEvents.push(...todayEvents);
  }

  // Remove upcoming events from past events if they are present
upcomingEvents.forEach((upcomingEvent) => {
  const index = pastEvents.findIndex((pastEvent) => pastEvent.id === upcomingEvent.id);
  if (index !== -1) {
    pastEvents.splice(index, 1);
  }
});
 // Sort upcoming events by date
 
   return (
   

    <div className="mb-20">
      <h2 className="font-bold text-2xl text-center">Upcoming Events</h2>

      {upcomingEvents.length > 0 && (
        <div>
          {upcomingEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((event) => (
            <UpcomingEventCard key={event.id} event={event} />
          ))}
        </div>
      )}
      {upcomingEvents.length === 0 && <p>No events</p>}

      {upcomingEvents.length > 0 && <div style={{ margin: "20px 0" }}></div>}

      {pastEvents.length > 0 && (
        <div className="overflow-y-auto">
          <h2 className="font-bold text-2xl text-center mt-20">Past Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
            {pastEvents.reverse().map((event) => (
              <div
                key={event.id}
                className="bg-white border rounded shadow-md p-4"
              >
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