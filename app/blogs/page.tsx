import React from 'react';
import BlogList from '../components/BlogPost/BlogList';
import Layout from '../components/Layout';

const BlogPage: React.FC = () => {
  return (
    <Layout>
        <BlogList />
    </Layout>
  );
};

export default BlogPage;
