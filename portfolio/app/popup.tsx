import Image from "next/image";
import globalStyles from './css/globals.module.css';
import { Dispatch, SetStateAction } from "react";
import './css/global.css';
import Projects from "./projects";

interface ButtonSelectionProps {
  setSelectedButton: Dispatch<SetStateAction<string>>;
  // Will be HTML content for the body of the popup
  content: any;
  title: string,
}

const Popup = ({ setSelectedButton, content, title }: ButtonSelectionProps) => {


  return (
    <div className={`${globalStyles.popupScreen} window`}>
      <div className="title-bar">
        <div className="title-bar-text">
          {title}
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" onClick={() => setSelectedButton('home')} />
        </div>
      </div>
      <div className={` window-body ${globalStyles.popupBody}`}>
        {content}
      </div>
    </div>
  );
}
export default Popup;

