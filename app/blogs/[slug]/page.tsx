import { getPostNames, getPostData } from "@/lib/blog_functions";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import Layout from '../../components/Layout';

/**
 * return all possible slug values in an array like [{slug: 'first_blog'}, {slug: 'second_blog'}]
 */
export async function generateStaticParams() {
	const blogPosts = getPostNames();
	return blogPosts.map((post) => ({
		slug: post,
	}));
}

type BlogPageProps = {
	params: { slug: string };
};

export async function generateMetadata({
	params,
}: BlogPageProps): Promise<Metadata> {
	//Load the blog post metadata using blog_functions.ts
	const metadata = await getPostData(params.slug);
	if (metadata) {
		return {
			title: metadata.title,
			description: metadata.excerpt,
			openGraph: {
				images: metadata.image
			},
		};
	}
	return {}; //Default return.
}

export default async function BlogPage({ params }: BlogPageProps) {
	const BlogMarkdown = dynamic(
		() => import("@/blog/" + params.slug + ".mdx"),
	);

	return (
		<Layout>
			<div className="container mx-auto pb-24">
				<div>
					<Link
						prefetch={false}
						href={"/blogs"}
						className="text-sm font-medium p-2 rounded-md hover:bg-slate-200 dark:hover:bg-zinc-600">
						&larr; All Blogs
					</Link>
				</div>
				<article className="prose w-full mt-4 dark:prose-invert">
					<BlogMarkdown />
				</article>
			</div>
		</Layout>
	);
}