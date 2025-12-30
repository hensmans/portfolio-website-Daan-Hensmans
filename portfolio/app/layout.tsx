
import type { Metadata } from "next";
import './css/global.css';
import MainPage from "./mainPage";
import './css/global.css';

import './css/windows-xp.css';
// The Windows XP css
// https://botoxparty.github.io/XP.css/


export const metadata: Metadata = {
  title: "Portfolio | Daan Hensmans",
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
      </head>
      <MainPage />
    </html >
  );
}
