import React, { Dispatch, SetStateAction } from 'react';
import PopupButton from './popupButton';
import './css/global.css';
import buttonSelectionStyles from './css/buttonSelection.module.css';

interface ButtonSelectionProps {
  setSelectedButton: Dispatch<SetStateAction<string>>;
}

const ButtonSelection = ({ setSelectedButton }: ButtonSelectionProps) => {

  return (
    <div className={buttonSelectionStyles.buttonsBox}>
      <PopupButton setSelectedButton={setSelectedButton} iconName={'aboutme'} title={'aboutMe.html'} />
      <a href='cv.pdf' target="_blank" className="pdfLink"><PopupButton setSelectedButton={setSelectedButton} iconName={'cv'} title={'cv.pdf'} /></a>
      <PopupButton setSelectedButton={setSelectedButton} iconName={'projects'} title={'projects'} />
      <PopupButton setSelectedButton={setSelectedButton} iconName={'pictures'} title={'pictures'} />
    </div>
  );
}

export default ButtonSelection;