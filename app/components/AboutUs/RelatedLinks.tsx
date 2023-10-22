// components/RelatedLinks.tsx
import React from 'react';

const RelatedLinks: React.FC = () => {
  // Define your related links and descriptions here
  const links = [
    {
      title: 'WhatsApp Group for Pekan Christian Fellowship',
      url: 'https://chat.whatsapp.com/Ilu5VjArWOmBoV07dxDBVW',
      description: 'Join our WhatsApp group for updates and discussions.',
      button: 'Join Us'

    },
    {
      title: 'Pekan Methodist Chapel Instagram',
      url: 'https://www.instagram.com/pekan_methodist_chapel/',
      description: 'Follow us on Instagram for visual updates and events.',
      button: 'Follow Us'

    },
    {
      title: 'Catholic Varsity Student Fellowship (Gambang)',
      url: 'https://chat.whatsapp.com/BaI8WXmm2rgDxUsIOsYNLH',
      description: 'Connect with the Catholic fellowship in Gambang via WhatsApp.',
      button: 'Join Now'
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-2">Related Links</h2>
      {links.map((link, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h3 className="text-xl font-semibold">{link.title}</h3>
          <p>{link.description}</p>
          <a href={link.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          {link.button}
          </a>
        </div>
      ))}

    <div className="text-center mt-4">
        This website is made and sponsored by <a href="https://hovahyii.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Hovah</a>.
      </div>
    </div>
  );
};

export default RelatedLinks;
