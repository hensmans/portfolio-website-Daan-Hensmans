import globalStyles from './css/globals.module.css';
import './css/global.css';
import popupStyles from './css/popup.module.css';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import './css/global.css';
import Image, { StaticImageData } from "next/image";
import { useIsMobile } from './isMobileFunction'



interface ButtonSelectionProps {
  setSelectedButton: Dispatch<SetStateAction<string>>;
  // For taggling max and min state
  setMaximizeState: Dispatch<SetStateAction<boolean>>;
  maximizeState: boolean;
  // Will be HTML content for the body of the popup
  content: any;
  title: string;
  iconName: StaticImageData;
}

const Popup = ({ setSelectedButton, setMaximizeState, maximizeState, content, title, iconName }: ButtonSelectionProps) => {
  // Is true if user is on mobile
  const isMobile = useIsMobile();
  function goToHomeScreen() {
    // Go to home screen
    setSelectedButton('home');
    // Unmaximize
    setMaximizeState(false);
  }

  return (
    <div className={`${popupStyles.popupScreen} ${maximizeState || isMobile ? `${popupStyles.popupScreenMaximized}` : `${popupStyles.popupScreenMinimized}`} window`}>
      <div className={`title-bar ${popupStyles.popupTitleBar}`}>
        <div className={`${popupStyles.popupTitleBarLeft}`}>
          <Image src={iconName}
            alt={`Popup icon`}
            fill
            priority
            placeholder="blur"
            className={`${popupStyles.popupTitleBarIcon}`}
          />
          <div className="title-bar-text">
            {title}
          </div>
        </div>

        <div className={` title-bar-controls `}>

          {isMobile ? <></> : <button className={`${popupStyles.popupBarIcon}`} aria-label="Minimize" onClick={() => goToHomeScreen()} />}
          {isMobile ? <></> : <button className={`${popupStyles.popupBarIcon}`} aria-label="Maximize" onClick={() => setMaximizeState(!maximizeState)} />}
          <button className={`${popupStyles.popupBarIcon}`} aria-label="Close" onClick={() => goToHomeScreen()} />
        </div>
      </div >
      <div className={`window-body ${popupStyles.popupBody}`}>
        {content}
      </div>
    </div >
  );
}
export default Popup;

