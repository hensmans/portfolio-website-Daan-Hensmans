
import type { Metadata } from "next";
import globalStyles from './css/global.module.css';
import Image from 'next/image';
import MainPage from "./mainPage";
import './css/windows-xp.css';

// The Windows XP css
// https://botoxparty.github.io/XP.css/

export const metadata: Metadata = {
  title: "Daan Hensmans | Portfolio",
  description: "Daan Hensmans - Bilingual Software Engineer based in Belgium. Specializing in low-level systems and performance optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={` rootOfEverything`} >
      <head >
        {/* Fonts */}
        <link rel="preload" href="/_next/static/css/converted/ms_sans_serif.woff" as="font" type="font/woff" />
        <link rel="preload" href="/_next/static/css/converted/ms_sans_serif.woff2" as="font" type="font/woff2" />
        <link rel="preload" href="/_next/static/css/converted/ms_sans_serif_bold.woff" as="font" type="font/woff" />
        <link rel="preload" href="/_next/static/css/converted/ms_sans_serif_bold.woff2" as="font" type="font/woff2" />

        <link rel="preload" href="/cv_old.pdf" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/windows-xp-loading-compressed.gif" as="fetch" crossOrigin="anonymous" />
      </head>
      <MainPage />
    </html >
  );
}
