import fs from "fs";
import path from "path";
import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

// MDX Config =>
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { docsFilePaths, docsPath } from "@/services/mdx";
import { MDXMeta } from "@/interfaces/mdxMeta";

interface DocsPageProps {
  source: MDXRemoteSerializeResult;
  frontMatter: MDXMeta;
}

// Plugins =>
import matter from "gray-matter";
import rehypePrism from "rehype-prism-plus";
import { MDXComponents } from "@/components/mdx";

const Document = ({ source, frontMatter }: DocsPageProps) => {
  return (
    <>
      <Head>
        <title>{frontMatter.title} - SuperUI</title>
      </Head>
      <article className="prose prose-slate dark:prose-invert">
        <MDXRemote {...source} components={MDXComponents} />
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const docsFilePath = path.join(docsPath, `${params?.slug}.mdx`);
  const source = fs.readFileSync(docsFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [[rehypePrism, { showLineNumbers: true }]],
    },
    scope: data,
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = docsFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Document;
