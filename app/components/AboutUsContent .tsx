import React from 'react';
import BannerImage from './BannerImage';
import Description from './Description';
import RelatedLinks from './RelatedLinks';

const AboutUsContent: React.FC = () => {
  return (
    <div className="mt-8 overflow-y-auto mb-20">
      <BannerImage />
      <Description />
      <RelatedLinks />
 
    </div>
  );
};

export default AboutUsContent;
