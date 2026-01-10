
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
    <html lang="en" className={` rootOfEverything`} >
      <head >
        {/* Mouse pointers */}
        <link rel="preload" href="/mouse_pointers/xp_mouse_arrow.cur" as="image" type="image/x-icon" />
        <link rel="preload" href="/mouse_pointers/xp_mouse_arrow_large.cur" as="image" type="image/x-icon" />
        <link rel="preload" href="/mouse_pointers/xp_mouse_busy.cur" as="image" type="image/x-icon" />
        <link rel="preload" href="/mouse_pointersxp_mouse_busy_large.cur" as="image" type="image/x-icon" />
        <link rel="preload" href="/mouse_pointers/xp_mouse_link.cur" as="image" type="image/x-icon" />
        <link rel="preload" href="/mouse_pointers/xp_mouse_link_large.cur" as="image" type="image/x-icon" />
        <link rel="preload" href="/mouse_pointers/xp_mouse_text.cur" as="image" type="image/x-icon" />
        <link rel="preload" href="/mouse_pointers/xp_mouse_text_large.cur" as="image" type="image/x-icon" />

        {/* Fonts */}
        <link rel="preload" href="/fonts/converted/ms_sans_serif.woff2" as="font" type="font/woff2" fetchPriority="high" />
        <link rel="preload" href="/fonts/converted/ms_sans_serif_bold.woff2" as="font" type="font/woff2" fetchPriority="high" />
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
