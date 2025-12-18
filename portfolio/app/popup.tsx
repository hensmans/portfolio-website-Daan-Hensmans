import Image from "next/image";
import globalStyles from './css/globals.module.css';
import { Dispatch, SetStateAction } from "react";
import './css/global.css';
import Projects from "./projects";
import crtStyles from './css/crt.module.css';

interface ButtonSelectionProps {
  setSelectedButton: Dispatch<SetStateAction<string>>;
  // For taggling max and min state
  setMaximizeState: Dispatch<SetStateAction<boolean>>;
  maximizeState: boolean;
  // Will be HTML content for the body of the popup
  content: any;
  title: string,
}

const Popup = ({ setSelectedButton, setMaximizeState, maximizeState, content, title }: ButtonSelectionProps) => {

  function goToHomeScreen() {
    // Go to home screen
    setSelectedButton('home');
    // Unmaximize
    setMaximizeState(false);
  }


  return (
    <div className={`${globalStyles.popupScreen} ${maximizeState ? `${globalStyles.popupScreenMaximized}` : {}} window`}>
      <div className="title-bar">
        <div className="title-bar-text">
          {title}
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={() => goToHomeScreen()} />
          <button aria-label="Maximize" onClick={() => setMaximizeState(!maximizeState)} />
          <button aria-label="Close" onClick={() => goToHomeScreen()} />
        </div>
      </div>
      <div className={`window-body ${globalStyles.popupBody}`}>
        <div className={` ${globalStyles.popupBodyInner} ${maximizeState ? crtStyles.crtFishEye : {}}`}>
          {content}
        </div>
      </div>
    </div>
  );
}
export default Popup;

