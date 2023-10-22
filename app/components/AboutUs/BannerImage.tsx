// components/BannerImage.tsx
import React from 'react';

const BannerImage: React.FC = () => {
  // Define the image URL from your public folder
  const imageUrl = '/logo.png';

  return (
    <>
    <div className="flex justify-center">
      <img src={imageUrl} alt="Banner" className="md:w-1/4" />
    </div>
    </>
  );
};

export default BannerImage;
