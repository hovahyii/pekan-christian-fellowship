import Layout from '../components/Layout';
import EventList from '../components/Event/EventList'; // Import the EventCard component

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | Pekan Christian Community',
  description: "Explore upcoming events at Pekan Christian Community. Join us for worship services, Bible studies, community outreach, and fellowship gatherings. Everyone is welcome!",
    openGraph: {
      title: 'Events | Pekan Christian Community',
      description: "Explore upcoming events at Pekan Christian Community. Join us for worship services, Bible studies, community outreach, and fellowship gatherings. Everyone is welcome!",
      images: ['https://media.swncdn.com/cms/CW/faith/47910-church-fellowship-1200.1200w.tn.jpg'],
    },
  };

const Events: React.FC = () => {
  return (
    <Layout>
      {/* Fetch and display event cards */}
      <EventList />
    </Layout>
  );
};

export default Events;
