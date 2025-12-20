'use client';
import { useState } from 'react';
import globalStyles from './css/globals.module.css';
import './css/global.css';
import ButtonSelection from './buttonSelection';
import Popup from './popup';
import './css/global.css';
import Projects from './projects';
import AboutMe from './aboutMe';
import { Dispatch, SetStateAction } from "react";
import pageStyles from './css/page.module.css';
import Pdf from './pdf';

import dynamic from 'next/dynamic';

// This tells Next.js: "Only load this component in the browser"
const PdfViewer = dynamic(() => import('./pdf'), {
  ssr: false,
  loading: () => <p>Loading Viewer...</p>
});

interface Parameters {
  // For taggling max and min state
  setMaximizeState: Dispatch<SetStateAction<boolean>>;
  maximizeState: boolean;
}

export default function CenteredBox({ setMaximizeState, maximizeState }: Parameters) {
  const [selectedButton, setSelectedButton] = useState('home');


  function getSelectedPopupComponent() {
    switch (selectedButton) {
      case 'home':
        return <ButtonSelection setSelectedButton={setSelectedButton}></ButtonSelection>;
      case 'projects':
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<Projects />} title={'projects folder'}></Popup>;
      case 'pictures':
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<Projects />} title={'photos folder'}></Popup>;
      case 'aboutme':
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<AboutMe maximizeState={maximizeState} />} title={'aboutMe.html'}></Popup>;
      case 'cv':
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<PdfViewer maximizeState={maximizeState} />} title={'cv.pdf'}></Popup>;
      default:
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<div />} title={'ERROR'}></Popup>;
    };

  }

  return <div className={`${pageStyles.content}`}>

    {getSelectedPopupComponent()}
  </div>;

}

