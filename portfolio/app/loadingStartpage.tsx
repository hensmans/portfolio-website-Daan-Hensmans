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
  const [isDomLoaded, setIsDomLoaded] = useState(false);



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDomLoaded(true);
    }, 750); // A small delay is often useful to prevent quick flicker

    return () => clearTimeout(timer); // Cleanup
  }, []);

  // Show loadbar if loading
  if (!isDomLoaded) {
    return (
      <div className={globalStyles.loadingBackground}>
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
    );
  }


  return (
    <div className={`${globalStyles.backgroundContainer} `}>
      <main className={`${globalStyles.content}`}>
        <PreloadContent />
      </main>
    </div>

  );
}