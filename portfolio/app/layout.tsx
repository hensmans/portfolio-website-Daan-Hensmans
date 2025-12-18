
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './css/global.css';
import LoadingStartpage from "./loadingStartpage";

// The Windows XP css
// https://botoxparty.github.io/XP.css/




export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created by Daan Hensmans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/xp.css" />
        {/* Preload the background image */}
        <link
          rel="preload"
          href={'windows-xp-background.jpeg'}
          as="image"
          type="image/jpeg"
          crossOrigin="anonymous"
        />
      </head>
      <LoadingStartpage />
    </html >
  );
}
