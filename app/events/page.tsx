import Layout from '../components/Layout';
import EventList from '../components/Event/EventList'; // Import the EventCard component

const Events: React.FC = () => {
  return (
    <Layout>
      {/* Fetch and display event cards */}
      <EventList />
    </Layout>
  );
};

export default Events;
