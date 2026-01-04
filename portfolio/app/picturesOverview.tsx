import './css/global.css';
import fileOverviewStyles from './css/fileOverview.module.css';
import Image from "next/image";
import { useState } from 'react';



interface Parameters {
    pics: string[];
}


const PicturesOverview = ({ pics }: Parameters) => {
    const [previewActiveState, setPreviewActiveState] = useState(false);
    const [currentIndexState, setCurrentIndexState] = useState(0);

    const handlePicClick = (picName: string) => {
        setPreviewActiveState(true);
        setCurrentIndexState(pics.findIndex(pic => pic === picName))

    }


    const generatePictureOverview = () => {

        const nextSlide = () => {
            if (currentIndexState < pics.length) {
                setCurrentIndexState(currentIndexState + 1);
            }
        };

        const prevSlide = () => {
            if (currentIndexState > 0) {
                setCurrentIndexState(currentIndexState - 1);
            }
        };

        return (
            <div className={`${fileOverviewStyles.previewRoot}`}>
                <button className={`${fileOverviewStyles.controls}`} onClick={prevSlide} disabled={currentIndexState === 0}>
                    {"<"}
                </button>
                {/* The image */}
                <div className={`${fileOverviewStyles.previewPicWrapper}`}>
                    <Image src={`/pictures/photography/${pics[currentIndexState]}.webp`}
                        alt={`Picture ${pics[currentIndexState]} preview`}
                        width={0} height={0} sizes="100vw"
                        priority
                        className={fileOverviewStyles.previewPic}
                    />
                </div>
                <button className={`${fileOverviewStyles.controls}`} onClick={nextSlide} disabled={currentIndexState === pics.length - 1}>
                    {">"}
                </button>
            </div>
        )
    };



    return (
        <div className={`${fileOverviewStyles.root} `} >
            {previewActiveState
                ? generatePictureOverview()
                : <div className={`${fileOverviewStyles.pics}`}>
                    {pics.map((picName) => (
                        <a className={`${fileOverviewStyles.picWrap}`} key={picName}
                            onClick={() => handlePicClick(picName)}>
                            <Image src={`/pictures/photography/${picName}.webp`}
                                alt={`${picName} preview`}
                                fill
                                className={fileOverviewStyles.pic}
                                style={{ objectFit: 'cover' }}
                            />
                        </a>
                    ))}
                </div>
            }

        </div >



    );
}
export default PicturesOverview;

