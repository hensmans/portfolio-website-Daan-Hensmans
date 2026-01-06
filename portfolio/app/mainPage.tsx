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


// Icons
import noImagePic from '../assets/pictures/projects/no-image.webp';
import cvPic from '../assets/icons/cv.webp';
import aboutmePic from '../assets/icons/aboutme.webp';
import picturesPic from '../assets/icons/pictures.webp';
import projectsPic from '../assets/icons/projects.webp';

// Monitor

import monitorBorder from '../assets/monitor/monitor-screen-border-15.webp';
import monitorName from '../assets/monitor/monitor-screen-daan-hensmans-13.webp';

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

export function useAudioBuffer(audioName: string) {
  const audioContextRef = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();

    fetch(`/sounds/${audioName}.mp3`)
      .then(response => response.arrayBuffer())
      .then(data => audioContextRef.current!.decodeAudioData(data))
      .then(buffer => {
        bufferRef.current = buffer;
      });
  }, []);


  const play = (volume: number) => {
    if (!bufferRef.current || !audioContextRef.current) return;



    const source = audioContextRef.current.createBufferSource();
    source.buffer = bufferRef.current;

    const gainNode = audioContextRef.current.createGain();
    gainNode.gain.value = volume;

    // Connect: Source -> Volume -> Speakers
    source.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);

    // Resume context (browsers require a user gesture)
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
    source.start(0);
  };

  return play;
}

export default function Mainpage() {
  const [maximizeState, setMaximizeState] = useState(false);
  const [mutedState, setMutedState] = useState(false);
  const [monitorOnState, setMonitorOnState] = useState(true);
  const [iconName, setIconName] = useState(noImagePic);
  const [firstTimeClickState, setFirstTimeClickState] = useState(false);

  const mouseClickPlay = useAudioBuffer('mouse-click-2');
  const startUpSoundRef = useRef<HTMLAudioElement | null>(null);
  const computerNoiseRef = useRef<HTMLAudioElement | null>(null);
  const computerNoiseRef2 = useRef<HTMLAudioElement | null>(null);

  const soundVolume = 0.8;
  const soundVolumeNoise = soundVolume / 3;

  const turnOnSound = () => {
    startUpSoundRef.current!.volume = soundVolume;
    computerNoiseRef.current!.volume = soundVolumeNoise;
    computerNoiseRef2.current!.volume = soundVolumeNoise;
  }

  const turnOffSound = () => {
    startUpSoundRef.current!.volume = 0;
    computerNoiseRef.current!.volume = 0;
    computerNoiseRef2.current!.volume = 0;
  }

  const playBackgroundNoise = () => {
    computerNoiseRef.current!.play().catch(err => { });
    computerNoiseRef2.current!.play().catch(err => { });
  }

  // Activated at the very first user click (this is necessary because of browser permissions)
  useEffect(() => {
    // Start background noise if not started yet
    if (!mutedState) {
      // Start background 
      // Play second noise later so the loop isn't that obvious
      computerNoiseRef.current!.currentTime = 0;
      computerNoiseRef2.current!.currentTime = 5;
      playBackgroundNoise();
      turnOnSound();
    }
  }, [firstTimeClickState]);

  // Starts computer backgrund noise
  const startComputerNoise = () => {
    // Start background noise if not started yet
    if (!mutedState && computerNoiseRef.current && computerNoiseRef2.current) {
      if (computerNoiseRef.current.paused) {
        computerNoiseRef.current.currentTime = 0;
        computerNoiseRef.current.play().catch(err => { });
        // Play second noise later so the loop isn't that obvious
        computerNoiseRef2.current.currentTime = 5;
        computerNoiseRef2.current.play().catch(err => { });
      };
    }
  }

  // For mouse click
  useEffect(() => {
    const playClick = () => {
      mouseClickPlay(mutedState ? 0 : soundVolume);
      // Start background noise if didn't happen yet
      startComputerNoise();

      if (!firstTimeClickState) {
        setFirstTimeClickState(true);
      }
    };
    window.addEventListener('mousedown', playClick);
    return () => window.removeEventListener('mousedown', playClick);

  }, [mutedState]); // Mutedstate dependency because new listener 



  // When monitor is switched on or off
  useEffect(() => {
    if (monitorOnState && startUpSoundRef.current) {
      startUpSoundRef.current.currentTime = 0;
      startUpSoundRef.current.play().catch(err => { });
      playBackgroundNoise();
    } else {
      startUpSoundRef.current?.pause();
      computerNoiseRef.current?.pause();
      computerNoiseRef2.current?.pause();
    }
  }, [monitorOnState]);

  // (un)mute sounds
  useEffect(() => {
    mutedState ? turnOffSound() : turnOnSound();
    computerNoiseRef.current?.play().catch(err => { });
    computerNoiseRef2.current?.play().catch(err => { });
  }, [mutedState]);


  // Toggle the muted state and change the volumes
  const toggleMutedState = () => {
    setMutedState(!mutedState);
  }

  const [selectedButton, setSelectedButton] = useState('home');
  const [titleName, setTitleName] = useState('home');

  // Change icon of popup whenever button is pressed
  useEffect(() => {

    switch (selectedButton) {
      case 'home':
        setIconName(noImagePic);
        setTitleName('home');
        break;
      case 'projects':
        setIconName(projectsPic);
        setTitleName('README.md');
        break;
      case 'pictures':
        setIconName(picturesPic);
        setTitleName('pictures');
        break;
      case 'aboutme':
        setIconName(aboutmePic);
        setTitleName('aboutMe.html');
        break;
      case 'cv':
        setIconName(cvPic);
        setTitleName('cv.pdf');
        break;
      default:
        setIconName(noImagePic);
        setTitleName('NaN');
    }

  }, [selectedButton]);

  return (
    <body className={`${mainPageStyles.screen} ${crtStyles.crtFishEye}`}>
      <audio ref={startUpSoundRef} src="/sounds/windows-xp-startup.mp3" preload="auto" />
      <audio ref={computerNoiseRef} autoPlay loop src="/sounds/computer-noise-1.mp3" preload="auto" />
      <audio ref={computerNoiseRef2} autoPlay loop src="/sounds/computer-noise-1-cut.mp3" preload="auto" />



      <main className={`${mainPageStyles.content} `}>
        {/* Monitor Border */}
        <div className={`${crtStyles.monitor}`}>
          <Image className={`${crtStyles.monitorScreen} noMousePointer`} fill priority alt='Monitor border screen' src={monitorBorder} />
          <Image className={crtStyles.monitorName} fill priority alt='Monitor border screen' src={monitorName} placeholder="blur" />
          <div className={crtStyles.monitorButton}>
            <MonitorButton monitorOnState={monitorOnState} setMonitorOnState={setMonitorOnState} />
          </div>

        </div>
        {/* Monitor content and screen */}
        {monitorOnState ?
          // Monitor on
          <div className={` ${crtStyles.crt}  ${crtStyles.crtMainScreen} mousePointer ${mainPageStyles.windowsXPBackground}`}>
            {/* CRT lines */}
            <div className={crtStyles.crtLines} />
            {/* Monitor content */}
            <div className={mainPageStyles.contentLayout}>
              <PreloadContent setMaximizeState={setMaximizeState} maximizeState={maximizeState} setIconName={setIconName} iconName={iconName}
                selectedButton={selectedButton} setSelectedButton={setSelectedButton} titleName={titleName} setTitleName={setTitleName} />
              <Taskbar toggleMutedState={toggleMutedState} mutedState={mutedState} setMonitorOnState={setMonitorOnState} setSelectedButton={setSelectedButton} />
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