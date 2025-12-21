import React, { useState } from 'react';
import pictureSlideshowStyles from './css/pictureSlideshow.module.css';

interface Parameters {
    youtubeId: string | undefined;
    pictures: string[];
}

const PictureSlideshow = ({ youtubeId, pictures }: Parameters) => {
    const [currentIndex, setCurrentIndex] = useState(0);



    // Define video
    const youtubeIdDefined = youtubeId ?? "dQw4w9WgXcQ";
    // Define pictures
    const picturesDefined = pictures.length == 0 ? ["no_image.png"] : pictures;
    const isVideoSlide = currentIndex === picturesDefined.length;

    const nextSlide = () => {
        if (currentIndex < picturesDefined.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className={`${pictureSlideshowStyles.slideshowContainer}`}>
            <div className={`${pictureSlideshowStyles.mediaViewport}`}>
                {!isVideoSlide ? (
                    /* Photo Slide */
                    <img
                        src={`/pictures/${picturesDefined[currentIndex]}`}
                        alt={`Slide ${currentIndex}`}
                        className={`${pictureSlideshowStyles.slideImage}`}
                    />
                ) : (
                    /* YouTube Video Slide */
                    <div className={`${pictureSlideshowStyles.videoWrapper}`}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${youtubeIdDefined}?autoplay=1`}
                            title="YouTube video player"
                            onLoad={() => <p className={pictureSlideshowStyles.loadingText}>loading...</p>}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>

            {/* Navigation Controls */}
            <div className={`${pictureSlideshowStyles.controls}`}>
                <button onClick={prevSlide} disabled={currentIndex === 0}>
                    Back
                </button>
                <span>{isVideoSlide ? 'Video' : `Image ${currentIndex + 1}`}</span>
                <button onClick={nextSlide} disabled={isVideoSlide}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PictureSlideshow;