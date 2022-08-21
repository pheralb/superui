const SEO = {
  title: "A Tailwindcss component library",
  titleTemplate: "%s - SuperUI",
  description:
    "A Tailwindcss component library built with Typescript, open source & accessible.",
  defaultTitle: "SuperUI",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/img/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/img/apple-touch-icon-180x180.png",
      sizes: "180x180",
    },
    {
      rel: "apple-touch-icon",
      href: "/img/apple-touch-icon-152x152.png",
      sizes: "152x152",
    },
    {
      rel: "apple-touch-icon",
      href: "/img/apple-touch-icon-114x114.png",
      sizes: "114x114",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "preload",
      href: "/fonts/inter-var-latin.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ],
  openGraph: {
    site_name: "SuperUI",
    url: "https://superui.vercel.app/",
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "/img/banner.png",
        width: 1920,
        height: 1080,
        type: "image/png",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};

export default SEO;
