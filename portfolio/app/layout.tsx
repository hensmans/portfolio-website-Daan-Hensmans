
import type { Metadata } from "next";
import MainPage from "./mainPage";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import localFont from 'next/font/local';

// The Windows XP css
// https://botoxparty.github.io/XP.css/

export const metadata: Metadata = {
  title: "Daan Hensmans | Portfolio",
  description: "Daan Hensmans - Bilingual Software Engineer based in Belgium. Specializing in low-level systems and performance optimization.",
};

// Fonts
const pixelatedSans = localFont({
  src: [
    {
      path: '../public/fonts/converted/ms_sans_serif.woff2',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--primary-font',
  display: 'swap',
});

const pixelatedSansBold = localFont({
  src: [
    {
      path: '../public/fonts/converted/ms_sans_serif_bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--primary-font-bold',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${pixelatedSans.variable} ${pixelatedSansBold.variable}`} >
      <head >
        {/* PDF */}
        <link rel="preload" href="/Hensmans-Daan-CV.pdf" as="fetch" crossOrigin="anonymous" fetchPriority="high" />
        {/* Loading gif */}
        <link rel="preload" href="/windows-xp-loading-compressed.gif" as="fetch" crossOrigin="anonymous" fetchPriority="high" />
      </head>
      {/* Vercel */}
      <SpeedInsights />
      <Analytics />
      {/* Website */}
      <MainPage />
    </html >
  );
}
