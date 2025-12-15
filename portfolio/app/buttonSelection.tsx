import Image from "next/image";
import globalStyles from './globals.module.css';
import React, { Dispatch, SetStateAction } from 'react';
import PopupButton from './popupButton';


interface ButtonSelectionProps {
  setSelectedButton: Dispatch<SetStateAction<string>>;
}

const ButtonSelection = ({ setSelectedButton }: ButtonSelectionProps) => {

  return (
    <div className={`${globalStyles.buttonsBox}`}>
      <PopupButton setSelectedButton={setSelectedButton} iconName={'aboutme'} title={'aboutMe.html'} />
      <a href='cv.pdf' target="_blank" className={globalStyles.pdfLink}><PopupButton setSelectedButton={setSelectedButton} iconName={'cv'} title={'cv.pdf'} /></a>
      <PopupButton setSelectedButton={setSelectedButton} iconName={'projects'} title={'projects'} />
      <PopupButton setSelectedButton={setSelectedButton} iconName={'pictures'} title={'pictures'} />
    </div>
  );
}

export default ButtonSelection;