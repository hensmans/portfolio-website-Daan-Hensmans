import React, { Dispatch, SetStateAction } from 'react';
import PopupButton from './popupButton';
import './css/global.css';
import buttonSelectionStyles from './css/buttonSelection.module.css';

import projects from '../assets/icons/projects.webp';
import pictures from '../assets/icons/pictures.webp';
import aboutme from '../assets/icons/aboutme.webp';
import cv from '../assets/icons/cv.webp';

interface ButtonSelectionProps {
  setSelectedButton: Dispatch<SetStateAction<string>>;
}

const ButtonSelection = ({ setSelectedButton }: ButtonSelectionProps) => {

  return (
    <div className={buttonSelectionStyles.buttonsBox}>
      <PopupButton setSelectedButton={setSelectedButton} icon={aboutme} iconName={'aboutme'} title={'aboutMe.html'} />
      <PopupButton setSelectedButton={setSelectedButton} icon={cv} iconName={'cv'} title={'cv.pdf'} />
      <PopupButton setSelectedButton={setSelectedButton} icon={projects} iconName={'projects'} title={'projects'} />
      <PopupButton setSelectedButton={setSelectedButton} icon={pictures} iconName={'pictures'} title={'pictures'} />
    </div>
  );
}

export default ButtonSelection;