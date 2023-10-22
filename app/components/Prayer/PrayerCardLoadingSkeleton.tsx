import React from 'react';
import ContentLoader from 'react-content-loader';

function PrayerCardLoadingSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 md:w-1/3 w-full">
      <div className="flex items-center">
        <ContentLoader
          speed={2}
          width={50}
          height={50}
          viewBox="0 0 50 50"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="25" cy="25" r="25" />
        </ContentLoader>
        <div className="p-4">
          <ContentLoader
            speed={2}
            width={150}
            height={20}
            viewBox="0 0 150 20"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="4" ry="4" width="150" height="20" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width={100}
            height={16}
            viewBox="0 0 100 16"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="3" ry="3" width="100" height="16" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width={300}
            height={16}
            viewBox="0 0 300 16"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="3" ry="3" width="300" height="16" />
          </ContentLoader>
        </div>
      </div>
    </div>
  );
}

export default PrayerCardLoadingSkeleton;
