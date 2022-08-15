import fs from "fs";
import matter from "gray-matter";
import path, { join } from "path";

type DocsItems = {
  [key: string]: string;
};

// Docs Route =>
export const docsPath = path.join(process.cwd(), "docs");

// Get only .mdx files =>
export const docsFilePaths = fs
  .readdirSync(docsPath)
  .filter((path) => /\.mdx?$/.test(path));

// Get docs slugs =>
export function getDocsSlugs(): string[] {
  return fs.readdirSync(docsPath);
}

// Return items from one document by slug =>
export function getDocumentBySlug(
  slug: string,
  fields: string[] = []
): DocsItems {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(docsPath, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: DocsItems = {};
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

// Return all documents =>
export function getAllDocuments(fields: string[] = []): DocsItems[] {
  const slugs = getDocsSlugs();
  const docs = slugs
    .map((slug) => getDocumentBySlug(slug, fields))
    .sort((docs1, docs2) => (docs1.date > docs2.date ? -1 : 1));
  return docs;
}
