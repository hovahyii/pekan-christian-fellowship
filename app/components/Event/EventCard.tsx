import React, { useEffect } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  description?: string;
  imageUrl: string;
}

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { title, date, time, venue, description, imageUrl } = event;
  const defaultImageUrl = 'https://media.swncdn.com/cms/CW/faith/47910-church-fellowship-1200.1200w.tn.jpg'; // Replace with your default image URL

  // Function to format time
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const parsedHours = parseInt(hours, 10);
    const isPM = parsedHours >= 12;
    const formattedHours = (parsedHours % 12) || 12; // Convert to 12-hour format
    const period = isPM ? 'PM' : 'AM';
    return `${formattedHours}:${minutes} ${period}`;
  };

  useEffect(() => {
    // Update meta tags dynamically
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || '');

    let metaImage = document.querySelector('meta[property="og:image"]');
    if (!metaImage) {
      metaImage = document.createElement('meta');
      metaImage.setAttribute('property', 'og:image');
      document.head.appendChild(metaImage);
    }
    metaImage.setAttribute('content', imageUrl || '');
  }, [title, description, imageUrl]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img
          src={imageUrl || defaultImageUrl}
          alt={title}
          className="mb-2 w-full md:h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Time:</strong> {formatTime(time)}
        </p>
        <p>
          <strong>Venue:</strong> {venue}
        </p>
        {description && (
          <div className="mt-2">
            <p>
              <strong>Description:</strong>
            </p>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface UpcomingEventCardProps {
  event: Event;
}

export const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({ event }) => {
  return <EventCard event={event} />;
};

interface PastEventCardProps {
  event: Event;
}

export const PastEventCard: React.FC<PastEventCardProps> = ({ event }) => {
  return <EventCard event={event} />;
};
