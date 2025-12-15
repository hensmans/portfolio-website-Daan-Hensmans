import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import globalStyles from './css/globals.module.css';
import './css/global.css';
import LoadingStartpage from "./loadingStartpage";

// The Windows XP css
// https://botoxparty.github.io/XP.css/

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingStartpage />
      </body>
    </html>
  );
}
