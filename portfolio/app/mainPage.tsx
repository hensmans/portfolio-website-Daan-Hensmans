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
  const [mutedState, setMutedState] = useState(false);

  const mouseClickSoundRef = useRef<HTMLAudioElement | null>(null);
  const startUpSoundRef = useRef<HTMLAudioElement | null>(null);
  const computerNoiseRef = useRef<HTMLAudioElement | null>(null);
  const computerNoiseRef2 = useRef<HTMLAudioElement | null>(null);


  const soundVolume = 0.2
  // For mouse clicks
  const handleMouseClick = () => {
    if (computerNoiseRef.current && computerNoiseRef2.current) {
      if (computerNoiseRef.current.paused) {
        computerNoiseRef.current.volume = mutedState ? 0 : soundVolume;
        computerNoiseRef.current.currentTime = 0;
        computerNoiseRef.current.play().catch(err => { });

        computerNoiseRef2.current.volume = mutedState ? 0 : soundVolume;
        computerNoiseRef2.current.currentTime = 10;
        computerNoiseRef2.current.play().catch(err => { });
      };
    }

    if (mouseClickSoundRef.current) {
      mouseClickSoundRef.current.volume = mutedState ? 0 : soundVolume;
      mouseClickSoundRef.current.currentTime = 0;
      mouseClickSoundRef.current.play().catch(err => { });
    };
  }

  // For start up sound effect
  // Doesnt work because user needs to interact with screen before laying sound :(


  useEffect(() => {

  }, []);

  // Toggle the muted state and change the volumes
  const toggleMutedState = () => {
    (mouseClickSoundRef.current) ? mouseClickSoundRef.current.volume = mutedState ? soundVolume : 0 : {};
    (startUpSoundRef.current) ? startUpSoundRef.current.volume = mutedState ? soundVolume : 0 : {};
    (computerNoiseRef.current) ? computerNoiseRef.current.volume = mutedState ? soundVolume : 0 : {};
    (computerNoiseRef2.current) ? computerNoiseRef2.current.volume = mutedState ? soundVolume : 0 : {};
    setMutedState(!mutedState);
  }

  return (
    <body className={`${mainPageStyles.screen} ${crtStyles.crtFishEye}`}>
      <audio ref={mouseClickSoundRef} src="/sounds/mouse-click-2.mp3" preload="auto" />
      <audio ref={startUpSoundRef} src="/sounds/windows-xp-startup.mp3" preload="auto" />
      <audio ref={computerNoiseRef} autoPlay loop src="/sounds/computer-noise-1.mp3" preload="auto" />
      <audio ref={computerNoiseRef2} autoPlay loop src="/sounds/computer-noise-1.mp3" preload="auto" />

      <main className={`${mainPageStyles.content} `}>
        <div className={`${crtStyles.monitor}`}>
          <Image className={`${crtStyles.monitorScreen} noMousePointer`} fill priority alt='Monitor border screen' src="/monitor-screen-border-5.png" />
          <Image className={crtStyles.monitorName} fill priority alt='Monitor border screen' src="/monitor-screen-daan-hensmans-9.png" />
        </div>
        <div className={` ${crtStyles.crt}  ${crtStyles.crtMainScreen} mousePointer ${mainPageStyles.windowsXPBackground}`}
          onMouseDown={handleMouseClick}>
          <div className={crtStyles.crtLines} />
          <div className={mainPageStyles.contentLayout}>
            <PreloadContent setMaximizeState={setMaximizeState} maximizeState={maximizeState} />
            <Taskbar toggleMutedState={toggleMutedState} mutedState={mutedState} />
          </div>

          <LoadingStartpage />
        </div>
      </main>

    </body >


  );
}