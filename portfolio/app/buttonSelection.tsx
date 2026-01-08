import React, { Dispatch, SetStateAction } from 'react';
import PopupButton from './popupButton';
import './css/global.module.css';
import buttonSelectionStyles from './css/buttonSelection.module.css';

import projects from '../assets/icons/projects_big.webp';
import pictures from '../assets/icons/pictures_big.webp';
import aboutme from '../assets/icons/aboutme_big.webp';
import cv from '../assets/icons/cv_big.webp';
import { useIsMobile } from './isMobileFunction'



interface ButtonSelectionProps {
  setSelectedButton: Dispatch<SetStateAction<string>>;
}

const ButtonSelection = ({ setSelectedButton }: ButtonSelectionProps) => {
  const isMobile = useIsMobile();
  return (
    <div className={buttonSelectionStyles.buttonsBox}>
      <PopupButton setSelectedButton={setSelectedButton} icon={aboutme} iconName={'aboutme'} title={'aboutMe.html'} />
      <PopupButton setSelectedButton={setSelectedButton} icon={cv} iconName={'cv'} title={'cv.pdf'} />
      {!isMobile
        ? <PopupButton setSelectedButton={setSelectedButton} icon={projects} iconName={'projects'} title={'projects'} />
        : <></>}
      {!isMobile
        ? <PopupButton setSelectedButton={setSelectedButton} icon={pictures} iconName={'pictures'} title={'pictures'} />
        : <></>}
    </div>
  );
}

export default ButtonSelection;