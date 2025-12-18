'use client';
import mainPageSystles from './css/mainPage.module.css';
import crtStyles from './css/crt.module.css';
import './css/global.css';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Image from "next/image";
import dynamic from 'next/dynamic';
import { Geist, Geist_Mono } from "next/font/google";
import LoadingStartpage from './loadingStartpage';


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


export default function Mainpage() {
  const [maximizeState, setMaximizeState] = useState(false);

  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased ${crtStyles.crt} ${crtStyles.crtLines} ${maximizeState ? {} : `${crtStyles.crtFishEye}`}`}
    >
      <div className={`${mainPageSystles.backgroundContainer} `}>
        <main className={`${mainPageSystles.content}`}>
          <PreloadContent setMaximizeState={setMaximizeState} maximizeState={maximizeState} />
          <LoadingStartpage />
        </main>
      </div>
    </body>
  );
}