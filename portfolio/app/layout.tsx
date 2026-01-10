
import type { Metadata } from "next";
import MainPage from "./mainPage";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

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
    <html lang="en" className={``} >
      <head >
        {/* PDF */}
        <link rel="preload" href="/cv_old.pdf" as="fetch" crossOrigin="anonymous" fetchPriority="high" />
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
