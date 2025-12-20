import React, { useState } from 'react';
import pictureSlideshowStyles from './css/pictureSlideshow.module.css';

const PictureSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'https://live.staticflickr.com/65535/54979498165_a5d8f4798d_z.jpg',
        'https://live.staticflickr.com/65535/54958523389_007662b823_z.jpg',
        'https://live.staticflickr.com/65535/54978316312_3a46944d9c_z.jpg',
    ];

    const youtubeId = "dQw4w9WgXcQ"; // Replace with your video ID
    const isVideoSlide = currentIndex === images.length;

    const nextSlide = () => {
        if (currentIndex < images.length) {
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
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        className={`${pictureSlideshowStyles.slideImage}`}
                    />
                ) : (
                    /* YouTube Video Slide */
                    <div className={`${pictureSlideshowStyles.videoWrapper}`}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
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