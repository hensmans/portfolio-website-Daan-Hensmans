'use client';
import { useState } from 'react';
import globalStyles from './css/globals.module.css';
import ButtonSelection from './buttonSelection';
import Popup from './popup';
import './css/global.css';
import Projects from './projects';
import { equal } from 'assert';
import AboutMe from './aboutMe';

export default function CenteredBox() {
  const [selectedButton, setSelectedButton] = useState('home');

  switch (selectedButton) {
    case 'cv':
    case 'home':
      console.log('home');
      return <ButtonSelection setSelectedButton={setSelectedButton}></ButtonSelection>;
    case 'projects':
      console.log('opening projects');
      return <Popup setSelectedButton={setSelectedButton} content={<Projects />} title={'projects folder'}></Popup>;
    case 'photos':
      // TODO
      return <Popup setSelectedButton={setSelectedButton} content={<Projects />} title={'photos folder'}></Popup>;
    case 'aboutme':
      return <Popup setSelectedButton={setSelectedButton} content={<AboutMe />} title={'aboutMe.html'}></Popup>;
    default:
      return <Popup setSelectedButton={setSelectedButton} content={<div />} title={'ERROR'}></Popup>;

  }
}

