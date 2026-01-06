
import type { Metadata } from "next";
import './css/global.css';
import MainPage from "./mainPage";
import './css/global.css';

import './css/windows-xp.css';
// The Windows XP css
// https://botoxparty.github.io/XP.css/


export const metadata: Metadata = {
  title: "Daan Hensmans | Portfolio",
  description: "Portfolio of Daan Hensmans, a Dutch Software Engineer located in Belgium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head className="rootOfEverything">
        {/* Preload the background image */}
        <link
          rel="preload"
          href={'windows-xp-background.jpeg'}
          as="image"
          type="image/jpeg"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/pictures/aboutme/aboutme_1.html" as="image" />
        <link rel="preload" href="/pictures/aboutme/aboutme_7.html" as="image" />
        <link rel="preload" href="/pictures/aboutme/aboutme_3.html" as="image" />
      </head>
      <MainPage />
    </html >
  );
}
