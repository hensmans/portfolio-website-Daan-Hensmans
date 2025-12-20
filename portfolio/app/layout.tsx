
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './css/global.css';
import LoadingStartpage from "./loadingStartpage";
import MainPage from "./mainPage";
import './css/global.css';

import './css/windows-xp.css';
// The Windows XP css
// https://botoxparty.github.io/XP.css/

import Image from "next/image";


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
        {/* Preload the background image */}
        <link
          rel="preload"
          href={'windows-xp-background.jpeg'}
          as="image"
          type="image/jpeg"
          crossOrigin="anonymous"
        />
      </head>
      <MainPage />
    </html >
  );
}
