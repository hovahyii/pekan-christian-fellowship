import React from 'react';
import ContentLoader from 'react-content-loader';

function BlogCardLoadingSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <ContentLoader
          speed={2}
          width={150}
          height={200}
          viewBox="0 0 150 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="4" ry="4" width="150" height="100" />
        </ContentLoader>
      </div>
      <div className="md:w-2/3 p-4">
        <ContentLoader
          speed={2}
          width={250}
          height={120}
          viewBox="0 0 250 120"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="20" rx="3" ry="3" width="150" height="8" />
          <rect x="0" y="50" rx="3" ry="3" width="100" height="8" />
          <rect x="0" y="80" rx="3" ry="3" width="120" height="8" />
        </ContentLoader>
      </div>
    </div>
  );
}

export default BlogCardLoadingSkeleton;
