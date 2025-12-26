'use client';
import loadingScreenStyles from './css/loadingScreen.module.css';
import './css/global.css';
import Image from "next/image";



export default function LoadingStartpage() {
  return (
    <div className={`${loadingScreenStyles.loadingBackground} ${loadingScreenStyles.loadingBackgroundFadeOut} waitingPointer noSelect`}>
      <Image
        src={'/windows-xp-loading.gif'}
        alt={'loading gif'}
        className={loadingScreenStyles.loadingGif}
        width={1}
        height={1}
        layout="responsive"
        priority
      />
    </div>
  );
}