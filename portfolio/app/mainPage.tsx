'use client';
import mainPageStyles from './css/mainPage.module.css';
import crtStyles from './css/crt.module.css';
import './css/global.css';
import React, { useState, useEffect, Dispatch, SetStateAction, useRef } from 'react';
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

  const mouseClickSoundRef = useRef<HTMLAudioElement | null>(null);
  const startUpSoundRef = useRef<HTMLAudioElement | null>(null);

  // For mouse clicks
  const handleMouseClickSoundEffect = () => {
    if (mouseClickSoundRef.current) {
      mouseClickSoundRef.current.volume = 0.2;
      mouseClickSoundRef.current.currentTime = 0;
      mouseClickSoundRef.current.play().catch(err => { });
    };
  }

  // For start up sound effect
  // Doesnt work because user needs to interact with screen before laying sound :(
  useEffect(() => {
    if (startUpSoundRef.current) {
      startUpSoundRef.current.volume = 0.2;
      startUpSoundRef.current.currentTime = 0;
      startUpSoundRef.current.play().catch(err => { });
    };
  }, []);

  return (
    <body className={`${mainPageStyles.screen} ${crtStyles.crtFishEye}`}>
      <audio ref={mouseClickSoundRef} src="/mouse-click-2.mp3" preload="auto" />
      <audio ref={startUpSoundRef} src="/windows-xp-startup.mp3" preload="auto" />

      <main className={`${mainPageStyles.content} `}>
        <div className={`${crtStyles.monitor}`}>
          <Image className={`${crtStyles.monitorScreen} noMousePointer`} fill priority alt='Monitor border screen' src="/monitor-screen-border-5.png" />
          <Image className={crtStyles.monitorName} fill priority alt='Monitor border screen' src="/monitor-screen-daan-hensmans-9.png" />
        </div>
        <div className={` ${crtStyles.crt}  ${crtStyles.crtMainScreen} mousePointer ${mainPageStyles.windowsXPBackground}`}
          onMouseDown={handleMouseClickSoundEffect}>
          <div className={crtStyles.crtLines} />
          <div className={mainPageStyles.contentLayout}>
            <PreloadContent setMaximizeState={setMaximizeState} maximizeState={maximizeState} />
            <Taskbar />
          </div>

          <LoadingStartpage />
        </div>
      </main>

    </body >


  );
}