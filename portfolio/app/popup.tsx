import popupStyles from './css/popup.module.css';
import { Dispatch, SetStateAction } from "react";;
import Image, { StaticImageData } from "next/image";
import { useIsMobile } from './isMobileFunction'
import windowsXPStyles from './css/windows-xp.module.css';

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
    <div className={`${popupStyles.popupScreen} ${maximizeState || isMobile ? `${popupStyles.popupScreenMaximized}` : `${popupStyles.popupScreenMinimized}`} ${windowsXPStyles.window}`}>
      <div className={`${windowsXPStyles.titleBar} ${popupStyles.popupTitleBar}`}>
        <div className={`${popupStyles.popupTitleBarLeft}`}>
          <Image src={iconName}
            alt={`Popup icon`}
            fill
            priority
            placeholder="blur"
            className={`${popupStyles.popupTitleBarIcon}`}
          />
          <div className={`${windowsXPStyles.titleBarText}`}>
            {title}
          </div>
        </div>

        <div className={` ${windowsXPStyles.titleBarControls} `}>
          {isMobile ? <></> : <button className={`${popupStyles.popupBarIcon}`} aria-label="Minimize" onClick={() => goToHomeScreen()} />}
          {isMobile ? <></> : <button className={`${popupStyles.popupBarIcon}`} aria-label="Maximize" onClick={() => setMaximizeState(!maximizeState)} />}
          <button className={`${popupStyles.popupBarIcon}`} aria-label="Close" onClick={() => goToHomeScreen()} />
        </div>
      </div >
      <div className={`${windowsXPStyles.windowBody} ${popupStyles.popupBody}`}>
        {content}
      </div>
    </div >
  );
}
export default Popup;

