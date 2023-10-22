'use client'

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import BlogPostCard from './BlogPostCard';
import BlogCardLoadingSkeleton from './BlogCardLoadingSkeleton';

const BlogList: React.FC = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetchBlogPosts();
    }, []);
  
    const fetchBlogPosts = async () => {
        const supabaseUrl = process.env.SUPABASE_URL || '';
        const supabaseKey = process.env.SUPABASE_KEY || '';
        const supabase = createClient(supabaseUrl, supabaseKey);
      
        try {
          const { data, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false  });
      
          if (error) {
            console.error('Supabase Error:', error); // Log the error
            setError(error.message);
            setLoading(false);
          } else {
            console.log('Fetched data:', data); // Log the fetched data
            setBlogPosts(data);
            setLoading(false);
          }
        } catch (error) {
          console.error('Fetch Error:', error); // Log any errors during the fetch
          setError(error.message);
          setLoading(false);
        }
      };
      
    return (
        <div className="blog-list-container h-[calc(100vh-100px)] overflow-y-auto">
        {isLoading &&  <BlogCardLoadingSkeleton />}
        {error && <p>Error: {error}</p>}
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    );
  };
  
export default BlogList;
