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
  title: "shivam",
  description:
    "Shivam Rana is a Full Stack Developer specializing in building real, impactful, and most importantly useful web applications.",
  keywords:
    "Shivam Rana, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js, software engineer",
  authors: [{ name: "Shivam Rana" }],
  openGraph: {
    title: "shivam",
    description: "",
    url: "https://shivamte.me",
    siteName: "shivam",
    images: [
      {
        url: "https://res.cloudinary.com/dcmziintu/image/upload/v1758973483/SH_1_3840x2160_n6yvub.png",
        width: 400,
        height: 200,
        alt: "shivam",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "shivam",
    creator: "@shivamrtwt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
