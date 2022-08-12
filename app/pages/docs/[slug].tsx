import fs from "fs";
import path from "path";
import Head from "next/head";
import type { GetStaticProps, GetStaticPaths } from "next";
import { docsFilePaths, docsPath } from "@/services/mdx";
import { MDXMeta } from "@/interfaces/mdxMeta";

interface DocsPageProps {
  source: MDXRemoteSerializeResult;
  frontMatter: MDXMeta;
}

// Custom Components =>
import Image from "next/image";
const MDXComponents = {
  Image,
};

// Plugins =>
import matter from "gray-matter";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const Doc = ({ source, frontMatter }: DocsPageProps) => {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <MDXRemote {...source} components={MDXComponents} />
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
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
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

export default Doc;
