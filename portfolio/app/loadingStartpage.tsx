'use client';
import loadingScreenStyles from './css/loadingScreen.module.css';
import './css/global.css';
import Image from "next/image";
import loadingGIf from '../assets/rest/windows-xp-loading-compressed.gif';


export default function LoadingStartpage() {
  return (
    <div className={`${loadingScreenStyles.loadingBackground} ${loadingScreenStyles.loadingBackgroundFadeOut} waitingPointer noSelect`}>
      <Image
        src={loadingGIf}
        alt={'loading gif'}
        className={`${loadingScreenStyles.loadingGif} noSelect`}
        width={1}
        height={1}
        layout="responsive"
        priority
        unoptimized
      />
    </div>
  );
}