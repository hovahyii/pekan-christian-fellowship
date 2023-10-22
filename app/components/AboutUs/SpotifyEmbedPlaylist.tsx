// components/BannerImage.tsx
import React from 'react';

const SpotifyEmbedPlaylist: React.FC = () => {
  // Define the image URL from your public folder
  const imageUrl = '/logo.png';

  return (
    <div className='mt-10'>
        <iframe className='rounded-lg' src="https://open.spotify.com/embed/playlist/6W4SlK4znNIR25zvmDQJ1h?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
};

export default SpotifyEmbedPlaylist;
