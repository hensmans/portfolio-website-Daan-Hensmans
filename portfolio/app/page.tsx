'use client';
import { useState } from 'react';
import globalStyles from './globals.module.css';
import ButtonSelection from './buttonSelection';
import Popup from './popup';
import './global.css';

export default function CenteredBox() {
  const [selectedButton, setSelectedButton] = useState('home');
  switch (selectedButton) {
    case 'home':
      return <ButtonSelection setSelectedButton={setSelectedButton}></ButtonSelection>;
    default:
      return <Popup setSelectedButton={setSelectedButton}></Popup>;

  }
}

