import React from 'react';
import Image from 'next/image';

interface Prayer {
  id: number;
  name: string;
  date: string;
  profileImage: string;
  prayerRequest: string;
}

interface PrayerCardProps {
  prayer: Prayer;
}

const PrayerCard: React.FC<PrayerCardProps> = ({ prayer }) => {
  const { name, date, profileImage, prayerRequest } = prayer;
  const defaultProfileImage = '/logo.jpg'; // Replace with your default profile image URL

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 md:w-1/3 w-full">
      <div className="flex items-center">
        <Image
          src={profileImage || defaultProfileImage}
          alt={name}
          width={16}
          height={16}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="p-4 flex-grow">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-semibold">{name}</h2>
            <div className="flex-grow"></div>
            <p className="text-gray-500 text-sm">{date}</p>
          </div>
          <p>{prayerRequest}</p>
        </div>
      </div>
    </div>
  );
};

export default PrayerCard;
