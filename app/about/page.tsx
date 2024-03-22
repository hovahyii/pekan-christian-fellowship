// pages/about.tsx
import React from 'react';
import Layout from '../components/Layout';
import AboutUsContent from '../components/AboutUs/AboutUsContent ';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Pekan Christian Community',
  description: "Explore upcoming events at Pekan Christian Community. Join us for worship services, Bible studies, community outreach, and fellowship gatherings. Everyone is welcome!",
  openGraph: {
      title: {
        absolute: 'About | Pekan Christian Community',
        default: 'Pekan Christian Community', // a default is required when creating a template
      },
      description:
      'Established in 2023, Pekan Christian Community is a vibrant community of Christian students united by faith. We are dedicated to connecting, supporting, and growing together in our shared journey with Christ. Join us, regardless of your denomination, and be part of an inclusive and faith-strengthening fellowship.',
      images: ['/logo.png'],
    },
  };


const About: React.FC = () => {
  return (
    <Layout>
      <AboutUsContent />
    </Layout>
  );
};

export default About;
