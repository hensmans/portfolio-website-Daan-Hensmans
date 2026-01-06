import React, { useEffect, useState } from 'react';
import pictureSlideshowStyles from './css/pictureSlideshow.module.css';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

import noImagePic from '../assets/pictures/projects/no-image.webp';

interface Parameters {
    youtubeId: string | undefined;
    pictures: StaticImageData[];
}

const PictureSlideshow = ({ youtubeId, pictures }: Parameters) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [videoLoaded, setVideoLoaded] = useState(false);
    // Define pictures
    const picturesDefined = pictures.length == 0 ? [noImagePic] : pictures;

    const imageComponents = picturesDefined.map((image, i) => (
        <Image
            key={i}
            src={image}
            alt={`Slide ${i}`}
            className={`${pictureSlideshowStyles.slideImage}`}
            placeholder="blur"
            blurDataURL="data:image/png;base64,..."
            priority={i < 2}
        />
    ));

    // Define video
    const youtubeIdDefined = youtubeId ?? false;

    const isVideoSlide = currentIndex === (youtubeIdDefined ? picturesDefined.length : picturesDefined.length - 1);

    const nextSlide = () => {
        if (currentIndex < picturesDefined.length - (youtubeIdDefined ? 0 : 1)) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        setCurrentIndex(0);
    }, [pictures]);

    useEffect(() => {
        setVideoLoaded(false);
    }, [currentIndex]);

    return (
        <div className={`${pictureSlideshowStyles.slideshowContainer}`}>
            <div className={`${pictureSlideshowStyles.mediaViewport}`}>
                {isVideoSlide && youtubeIdDefined
                    ? (
                        /* YouTube Video Slide */
                        <div className={`${pictureSlideshowStyles.videoWrapper}`}>
                            <p id={"videoLoader"} className={`${pictureSlideshowStyles.loadingText}`}>Loading video...</p>
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${youtubeIdDefined}?autoplay=1`}
                                title="YouTube video player"
                                onLoad={() => document.getElementById('videoLoader')!.style.display = 'none'}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        /* Photo Slide */
                        imageComponents[currentIndex]
                    )

                }
            </div>

            {/* Navigation Controls */}
            <div className={`${pictureSlideshowStyles.controls}`}>
                <button onClick={prevSlide} disabled={currentIndex === 0}>
                    Back
                </button>
                <span>{(isVideoSlide && youtubeIdDefined) ? 'Video' : `Image ${currentIndex + 1}`}</span>
                <button onClick={nextSlide} disabled={isVideoSlide}>
                    Next
                </button>
            </div>
        </div >
    );
};

export default PictureSlideshow;