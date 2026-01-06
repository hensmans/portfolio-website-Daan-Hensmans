import globalStyles from './css/globals.module.css';
import './css/global.css';
import popupStyles from './css/popup.module.css';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import './css/global.css';
import Image, { StaticImageData } from "next/image";


export function useIsMobile(query: string = '(max-width: 800px)') {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setIsMobile(media.matches);

    // Watch for changes
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return isMobile;
}


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
    <div className={`${popupStyles.popupScreen} ${maximizeState ? `${popupStyles.popupScreenMaximized}` : `${popupStyles.popupScreenMinimized}`} window`}>
      <div className={`title-bar ${popupStyles.popupTitleBar}`}>
        <div className={`${popupStyles.popupTitleBarLeft}`}>
          <Image src={iconName}
            alt={`Popup icon`}
            fill
            priority // preloads
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
        {isMobile
          ? <div className={`${popupStyles.popupBodyPhone}`}>
            <p>This project has not yet been optimised for small screens. Please use a larger screen to view the site. I apologise for the inconvenience.</p>
          </div>
          : content}

      </div>
    </div >
  );
}
export default Popup;

