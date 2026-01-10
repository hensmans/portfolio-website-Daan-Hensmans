'use client';
import ButtonSelection from './buttonSelection';
import Popup from './popup';
import FileExplorer from './fileExplorer';
import AboutMe from './aboutMe';
import { Dispatch, SetStateAction } from "react";
import pageStyles from './css/page.module.css';;
import { useIsMobile } from './isMobileFunction'
import dynamic from 'next/dynamic';
import { StaticImageData } from 'next/image';

// This tells Next.js: "Only load this component in the browser"
const PdfViewer = dynamic(() => import('./pdf'), {
  ssr: false,
  loading: () => <p>Loading Viewer...</p>
});

interface Parameters {
  // For taggling max and min state
  setMaximizeState: Dispatch<SetStateAction<boolean>>;
  maximizeState: boolean;

  setIconName: Dispatch<SetStateAction<StaticImageData>>;
  iconName: StaticImageData;

  selectedButton: string;
  setSelectedButton: Dispatch<SetStateAction<string>>;
  titleName: string;
  setTitleName: Dispatch<SetStateAction<string>>

}

export default function CenteredBox({ setMaximizeState, maximizeState, setIconName, iconName, selectedButton, setSelectedButton, titleName, setTitleName }: Parameters) {

  const isMobile = useIsMobile();

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
    {isMobile ? <div className={`${pageStyles.mobileWarningPopup}`}>
      This project has not yet been optimised for small screens. Please use a larger screen to view the site. I apologise for the inconvenience.
    </div>
      : <div />
    }
  </div>;

}

