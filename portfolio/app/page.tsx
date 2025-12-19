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

interface Parameters {
  // For taggling max and min state
  setMaximizeState: Dispatch<SetStateAction<boolean>>;
  maximizeState: boolean;
}

export default function CenteredBox({ setMaximizeState, maximizeState }: Parameters) {
  const [selectedButton, setSelectedButton] = useState('home');


  function getSelectedPopupComponent() {
    switch (selectedButton) {
      case 'cv':
      case 'home':
        return null;
      case 'projects':
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<Projects />} title={'projects folder'}></Popup>;
      case 'photos':
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<Projects />} title={'photos folder'}></Popup>;
      case 'aboutme':
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<AboutMe maximizeState={maximizeState} />} title={'aboutMe.html'}></Popup>;
      default:
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<div />} title={'ERROR'}></Popup>;
    };

  }

  return <div className={`${pageStyles.content}`}>
    <ButtonSelection setSelectedButton={setSelectedButton}></ButtonSelection>
    {getSelectedPopupComponent()}
  </div>;

}

