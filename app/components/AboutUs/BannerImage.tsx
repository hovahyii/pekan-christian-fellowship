// components/BannerImage.tsx
import React from 'react';
import Image from 'next/image';
const BannerImage: React.FC = () => {
  // Define the image URL from your public folder
  const imageUrl = '/logo.png';

  return (
    <>
    <div className="flex justify-center">
      <Image width={1000} height={1000} src={imageUrl} alt="Banner" className="md:w-1/4" />
    </div>
    </>
  );
};

export default BannerImage;
