import Image from "next/image";
import globalStyles from './globals.module.css';
import { Dispatch, SetStateAction } from "react";
import './global.css';

interface ButtonSelectionProps {
  setSelectedButton: Dispatch<SetStateAction<string>>;
}

const Popup = ({ setSelectedButton }: ButtonSelectionProps) => {


  return (
    <div className={`${globalStyles.popupScreen} window`}>
      <div className="title-bar">
        <div className="title-bar-text">
          aboutMe.html
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" onClick={() => setSelectedButton('home')} />
        </div>
      </div>
      <div className={` window-body ${globalStyles.popupBody}`}>

        <iframe
          className={`${globalStyles.popupIframe}`}
          src={"./old-site/index.html"}
          width="100%"
          height="100%"
          title="External Content"

        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    </div>
  );
}
export default Popup;

