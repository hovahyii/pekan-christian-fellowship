import React from 'react';
import BannerImage from './BannerImage';
import Description from './Description';
import RelatedLinks from './RelatedLinks';
import SpotifyEmbedPlaylist from './SpotifyEmbedPlaylist';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Pekan Christian Community',
  description: "Explore upcoming events at Pekan Christian Community. Join us for worship services, Bible studies, community outreach, and fellowship gatherings. Everyone is welcome!",
  openGraph: {
      title: {
        absolute: 'About',
        default: 'Pekan Christian Community', // a default is required when creating a template
      },
      description:
      'Established in 2023, Pekan Christian Community is a vibrant community of Christian students united by faith. We are dedicated to connecting, supporting, and growing together in our shared journey with Christ. Join us, regardless of your denomination, and be part of an inclusive and faith-strengthening fellowship.',
      images: ['/logo.png'],
    },
  };



const AboutUsContent: React.FC = () => {
  return (
    <div className="mt-8 overflow-y-auto mb-20">
      <BannerImage />
      <Description />
      <SpotifyEmbedPlaylist />
      <RelatedLinks />
 
    </div>
  );
};

export default AboutUsContent;
