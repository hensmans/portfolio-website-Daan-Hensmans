import globalStyles from './css/globals.module.css';
import './css/global.css';
import popupStyles from './css/popup.module.css';
import { Dispatch, SetStateAction } from "react";
import './css/global.css';
import Image from "next/image";

interface ButtonSelectionProps {
  setSelectedButton: Dispatch<SetStateAction<string>>;
  // For taggling max and min state
  setMaximizeState: Dispatch<SetStateAction<boolean>>;
  maximizeState: boolean;
  // Will be HTML content for the body of the popup
  content: any;
  title: string;
  iconName: string;
}

const Popup = ({ setSelectedButton, setMaximizeState, maximizeState, content, title, iconName }: ButtonSelectionProps) => {

  function goToHomeScreen() {
    // Go to home screen
    setSelectedButton('home');
    // Unmaximize
    setMaximizeState(false);
  }


  return (
    <div className={`${popupStyles.popupScreen} ${maximizeState ? `${popupStyles.popupScreenMaximized}` : {}} window`}>
      <div className={`title-bar ${popupStyles.popupTitleBar}`}>
        <div className={`${popupStyles.popupTitleBarLeft}`}>
          <Image src={`/icons/${iconName}.png`}
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
          <button className={`${popupStyles.popupBarIcon}`} aria-label="Minimize" onClick={() => goToHomeScreen()} />
          <button className={`${popupStyles.popupBarIcon}`} aria-label="Maximize" onClick={() => setMaximizeState(!maximizeState)} />
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

