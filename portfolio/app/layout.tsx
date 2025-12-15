import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import globalStyles from './globals.module.css';
import './global.css';

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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={`${globalStyles.backgroundContainer} `}>
          <main className={`${globalStyles.content}`}>
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
