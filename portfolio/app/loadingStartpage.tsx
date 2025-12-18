'use client';
import globalStyles from './css/globals.module.css';
import crtStyles from './css/crt.module.css';
import './css/global.css';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Image from "next/image";
import dynamic from 'next/dynamic';
import { Geist, Geist_Mono } from "next/font/google";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Once the DOM is loaded, render the actual content
const PreloadContent = dynamic(() => import('./page'), {
  loading: () => null,
});


export default function LoadingStartpage() {

  const [maximizeState, setMaximizeState] = useState(false);


  return (

    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased ${crtStyles.crt}  ${maximizeState ? {} : `${crtStyles.crtLines} ${crtStyles.crtFishEye}`}`}
    >
      <div className={`${globalStyles.backgroundContainer} `}>
        <main className={`${globalStyles.content}`}>
          <PreloadContent setMaximizeState={setMaximizeState} maximizeState={maximizeState} />
          <div className={`${globalStyles.loadingBackground} ${globalStyles.loadingBackgroundFadeOut}`}>
            <Image
              src={'/loading.gif'}
              alt={'loading gif'}
              className={globalStyles.loadingGif}
              width={1}
              height={1}
              layout="responsive"
              priority
            />
          </div>
        </main>
      </div>
    </body>
  );
}