import Layout from './components/Layout';
import EventList from './components/Event/EventList';

const Home: React.FC = () => {
  return (
    <Layout>
      <EventList />
    </Layout>
  );
};

export default Home;
