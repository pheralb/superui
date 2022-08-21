import fs from "fs";
import path from "path";
import Head from "next/head";
import type { GetStaticProps, GetStaticPaths } from "next";
import { docsFilePaths, docsPath } from "@/services/mdx";
import { MDXMeta } from "@/interfaces/mdxMeta";
import { motion } from "framer-motion";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";

interface DocsPageProps {
  source: MDXRemoteSerializeResult;
  frontMatter: MDXMeta;
}

// Custom Components =>
import { MDXComponents } from "@/components/documents/mdx";

// Plugins =>
import matter from "gray-matter";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Sidebar from "@/components/documents/sidebar";
import { Box, Heading, Text } from "@chakra-ui/react";

const Doc = ({ source, frontMatter }: DocsPageProps) => {
  return (
    <Sidebar>
      <Head>
        <title>{frontMatter.title} - SuperUI</title>
      </Head>
      <Box mb="15" mt="5">
        <Heading mb={2} fontSize="5xl">
          {frontMatter.title}
        </Heading>
        <Text mb={5}>{frontMatter.description}</Text>
      </Box>
      <Box mb="20">
        <MDXRemote {...source} components={MDXComponents as any} />
      </Box>
    </Sidebar>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const docsFilePath = path.join(docsPath, `${params?.slug}.mdx`);
  const source = fs.readFileSync(docsFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeCodeTitles,
        [rehypePrism, { showLineNumbers: true }],
        rehypeSlug,
        rehypeToc,
      ],
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
