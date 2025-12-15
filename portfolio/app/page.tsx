'use client';
import { useState } from 'react';
import globalStyles from './globals.module.css';
import ButtonSelection from './buttonSelection';
import Popup from './popup';
import './global.css';
import Projects from './projects';
import { equal } from 'assert';

export default function CenteredBox() {
  const [selectedButton, setSelectedButton] = useState('home');

  switch (selectedButton) {
    case 'cv':
    case 'home':
      console.log('home');
      return <ButtonSelection setSelectedButton={setSelectedButton}></ButtonSelection>;
    case 'projects':
      console.log('opening projects');
      return <Popup setSelectedButton={setSelectedButton} content={<Projects />}></Popup>;
    case 'photos':
      // TODO
      return <Popup setSelectedButton={setSelectedButton} content={<Projects />}></Popup>;
    case 'aboutMe':
      // TODO
      return <Popup setSelectedButton={setSelectedButton} content={<Projects />}></Popup>;
    default:
      return <Popup setSelectedButton={setSelectedButton} content={<Projects />}></Popup>;

  }
}

