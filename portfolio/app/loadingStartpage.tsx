'use client';

import React, { useState, useEffect } from 'react';
import globalStyles from './css/globals.module.css';
import Image from "next/image";
import dynamic from 'next/dynamic';

// Once the DOM is loaded, render the actual content
const PreloadContent = dynamic(() => import('./page'), {
  loading: () => null,
});

export default function LoadingStartpage() {
  return (
    <div className={`${globalStyles.backgroundContainer} `}>
      <main className={`${globalStyles.content}`}>
        <PreloadContent />
        <div className={`${globalStyles.loadingBackground} ${globalStyles.loadingBackgroundFadeOut}`}>
          <Image
            src={'/loading.gif'}
            alt={'loading gif'}
            className={globalStyles.loadingGif}
            width={1}
            height={1}
            layout="responsive"
            priority
          />
        </div>
      </main>
    </div>

  );
}