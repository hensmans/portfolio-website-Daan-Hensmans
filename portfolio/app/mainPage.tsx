'use client';
import mainPageStyles from './css/mainPage.module.css';
import crtStyles from './css/crt.module.css';
import './css/global.css';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Image from "next/image";
import dynamic from 'next/dynamic';
import { Geist, Geist_Mono } from "next/font/google";
import LoadingStartpage from './loadingStartpage';
import Taskbar from './taskBar';


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
    <body className={``} >

      <div className={`${mainPageStyles.backgroundContainer} ${maximizeState ? {} : `${crtStyles.crtFishEye}`} `}>
        <main className={`${mainPageStyles.content} `}>
          <Image className={crtStyles.monitorScreen} fill priority alt='Monitor border screen' src="/monitor-screen-border-5.png" />
          <Image className={crtStyles.monitorName} fill priority alt='Monitor border screen' src="/monitor-screen-daan-hensmans-2.png" />
          <PreloadContent setMaximizeState={setMaximizeState} maximizeState={maximizeState} />
          <Taskbar />
          {/* <LoadingStartpage /> */}
        </main>
      </div>
    </body >


  );
}