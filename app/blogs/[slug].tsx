import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
 
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Params {
  params: {
    slug: string;
  };
}

interface PostPage {
  frontMatter: any; // Adjust the type accordingly
  mdxSource: MDXRemoteSerializeResult;
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: Params) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const {content}   = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      slug,
      mdxSource,
    },
  };
};

export default function PostPage({ mdxSource }: PostPage) {
  return (
      <article className="mt-4">
        <div>
          <MDXRemote {...mdxSource} />
        </div>
      </article>
  );
}
