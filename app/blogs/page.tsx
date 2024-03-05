import { getPostsData } from "@/lib/blog_functions";
import Link from "next/link";
import React from "react";
import Layout from '../components/Layout';
import Image from "next/image";

export default async function Blogs() {
  const blogs = await getPostsData();

  // Sort blogs by date in ascending order
  blogs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Case: no posts
  if (blogs.length === 0) {
    return (
      <div className="container mx-auto p-4">There are no posts yet...</div>
    );
  }

  // Display all posts
  return (
    <Layout>
      <div className="container mx-auto p-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {blogs.reverse().map((blog) => (
            <div
              key={blog.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Blog Image */}
              <Image
                width={400}
                height={100}
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                {/* Blog Title */}
                <h2 className="text-lg font-semibold mb-2">
                  <Link prefetch={false} href={`/blogs/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>

                {/* Blog Author */}
                <p className="text-sm text-gray-500 mb-2">By {blog.author}</p>

                {/* Blog Description */}
                <p className="text-sm text-gray-600">{blog.excerpt}</p>

                {/* Blog Date */}
                <p className="mt-2 text-xs text-gray-400">
                  {blog.date.toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
