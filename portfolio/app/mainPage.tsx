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
import MonitorButton from './monitorButton';


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
  const [monitorOnState, setMonitorOnState] = useState(true);

  const mouseClickSoundRef = useRef<HTMLAudioElement | null>(null);
  const startUpSoundRef = useRef<HTMLAudioElement | null>(null);
  const computerNoiseRef = useRef<HTMLAudioElement | null>(null);
  const computerNoiseRef2 = useRef<HTMLAudioElement | null>(null);


  const soundVolume = 1;
  // For mouse clicks
  const handleMouseClick = () => {
    // Start background noise if not started yet
    if (computerNoiseRef.current && computerNoiseRef2.current) {
      if (computerNoiseRef.current.paused) {
        computerNoiseRef.current.volume = mutedState ? 0 : soundVolume;
        computerNoiseRef.current.currentTime = 0;
        computerNoiseRef.current.play().catch(err => { });
        // Play second noise later so the loop isn't that obvious
        computerNoiseRef2.current.volume = mutedState ? 0 : (2 * soundVolume / 3);
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
        {/* Monitor Border */}
        <div className={`${crtStyles.monitor}`}>
          <Image className={`${crtStyles.monitorScreen} noMousePointer`} fill priority alt='Monitor border screen' src="/monitor-screen-border-15.png" />
          <Image className={crtStyles.monitorName} fill priority alt='Monitor border screen' src="/monitor-screen-daan-hensmans-11.png" />
          <div className={crtStyles.monitorButton}>
            <MonitorButton monitorOnState={monitorOnState} setMonitorOnState={setMonitorOnState} />
          </div>

        </div>
        {/* Monitor content and screen */}
        {monitorOnState ?
          // Monitor on
          <div className={` ${crtStyles.crt}  ${crtStyles.crtMainScreen} mousePointer ${mainPageStyles.windowsXPBackground}`}
            onMouseDown={handleMouseClick}>
            {/* CRT lines */}
            <div className={crtStyles.crtLines} />
            {/* Monitor content */}
            <div className={mainPageStyles.contentLayout}>
              <PreloadContent setMaximizeState={setMaximizeState} maximizeState={maximizeState} />
              <Taskbar toggleMutedState={toggleMutedState} mutedState={mutedState} />
            </div>
            {/* Loading screen (dissapears after x seconds) */}
            <LoadingStartpage />
          </div>
          :
          // Monitor off
          <div />
        }

      </main>

    </body >


  );
}