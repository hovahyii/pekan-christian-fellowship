// components/BannerImage.tsx
import React from 'react';

const BannerImage: React.FC = () => {
  // Define the image URL from your public folder
  const imageUrl = '/logo.jpg';

  return (
    <div className="flex justify-center">
      <img src={imageUrl} alt="Banner" className="" />
    </div>
  );
};

export default BannerImage;
