'use client';
import { useEffect, useState } from 'react';
import globalStyles from './css/globals.module.css';
import './css/global.css';
import ButtonSelection from './buttonSelection';
import Popup from './popup';
import './css/global.css';
import FileExplorer from './fileExplorer';
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

  setIconName: Dispatch<SetStateAction<string>>;
  iconName: string;

  selectedButton: string;
  setSelectedButton: Dispatch<SetStateAction<string>>;
  titleName: string;
  setTitleName: Dispatch<SetStateAction<string>>

}

export default function CenteredBox({ setMaximizeState, maximizeState, setIconName, iconName, selectedButton, setSelectedButton, titleName, setTitleName }: Parameters) {


  function getSelectedPopupComponent() {

    switch (selectedButton) {
      case 'home':
        return null;
      case 'projects':
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<FileExplorer setIconName={setIconName} setTitleName={setTitleName} projectsFolderOpenInit={true} maximizeState={maximizeState} />} title={titleName} iconName={iconName}></Popup>;
      case 'pictures':
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<FileExplorer setIconName={setIconName} setTitleName={setTitleName} projectsFolderOpenInit={false} maximizeState={maximizeState} />} title={titleName} iconName={iconName}></Popup>;
      case 'aboutme':
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<AboutMe maximizeState={maximizeState} />} title={titleName} iconName={iconName}></Popup>;
      case 'cv':
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<PdfViewer maximizeState={maximizeState} />} title={titleName} iconName={iconName}></Popup>;
      default:
        return <Popup setSelectedButton={setSelectedButton} setMaximizeState={setMaximizeState} maximizeState={maximizeState} content={<div />} title={'ERROR'} iconName={iconName}></Popup>;
    };

  }

  return <div className={`${pageStyles.content}`}>
    <ButtonSelection setSelectedButton={setSelectedButton}></ButtonSelection>
    {getSelectedPopupComponent()}
  </div>;

}

