import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/Navbar";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Provider from "@/context/Provider";
import dynamic from "next/dynamic";
const ConditionalFooter = dynamic(() => import("./ConditionalFooter"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Shivam Rana | Full Stack Developer & Software Engineer",
  description:
    "Shivam Rana is a Full Stack Developer specializing in building real, impactful, and useful web applications. Explore his work in software engineering, frontend development, and modern web tech.",
  keywords:
    "Shivam Rana, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js, Software Engineer, Software Development, Portfolio Website",
  authors: [{ name: "Shivam Rana" }],
  metadataBase: new URL("https://shivamte.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shivam Rana | Full Stack Developer",
    description: "Full Stack Developer building real, impactful, and useful web applications.",
    url: "https://shivamte.me",
    siteName: "Shivam Rana Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dcmziintu/image/upload/v1758973483/SH_1_3840x2160_n6yvub.png",
        width: 1200,
        height: 630,
        alt: "Shivam Rana Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Rana | Full Stack Developer",
    description: "Full Stack Developer building real, impactful, and useful web applications.",
    creator: "@shivamrtwt",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shivam Rana",
  "url": "https://shivamte.me",
  "jobTitle": "Full Stack Developer",
  "sameAs": [
    "https://github.com/Shivgit42",
    "https://x.com/shivamrtwt",
    "https://www.linkedin.com/in/shivam-rana-a6427a1a2/"
  ],
  "description": "Full Stack Developer building real, impactful, and useful web applications."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`bg-white dark:bg-black`}>
        <Provider>
          <DarkModeProvider>
            <Toaster position="bottom-right" />
            <Theme className="dark:!bg-black">
              <Navbar />
              {children}
              <Analytics />
              <ConditionalFooter />
            </Theme>
          </DarkModeProvider>
        </Provider>
      </body>
    </html>
  );
}
