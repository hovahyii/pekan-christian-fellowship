import React from 'react';
import { FaUser, FaCalendar } from 'react-icons/fa';

interface BlogPost {
  id: number;
  author: string;
  title: string;
  content: string; // You can use Text or JSONB based on your requirements
  image: string;
  created_at: string; // Timestamp
}

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const { author, title, content, image, created_at } = post;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img
          src={image}
          alt={title}
          className="mb-2 w-full md:h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-4">
        <div className="mb-2 flex items-center">
          <FaUser size={16} className="mr-2" />
          <p>{author}</p>
        </div>
        <div className="mb-2 flex items-center">
          <FaCalendar size={16} className="mr-2" />
          <p>{new Date(created_at).toLocaleDateString()}</p>
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="mt-2">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
export default BlogPostCard;
