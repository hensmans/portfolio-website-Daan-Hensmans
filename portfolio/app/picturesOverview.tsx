import './css/global.css';
import fileOverviewStyles from './css/fileOverview.module.css';
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from 'react';



interface Parameters {
    pics: string[];
    setIconName: Dispatch<SetStateAction<string>>;
    setTitleName: Dispatch<SetStateAction<string>>;
    setSelectedFile: Dispatch<SetStateAction<number>>;
    selectedFile: number;
    picturesIcon: string;
    pictureIcon: string;
}


const PicturesOverview = ({ pics, setIconName, setTitleName, picturesIcon, pictureIcon, setSelectedFile, selectedFile }: Parameters) => {
    const fileIndex = 100;
    const picsStartIndex = fileIndex + 1;
    const [previewActiveState, setPreviewActiveState] = useState(selectedFile > fileIndex);
    const [currentIndexState, setCurrentIndexState] = useState(selectedFile - picsStartIndex);

    useEffect(() => {
        setPreviewActiveState(selectedFile > fileIndex);
        setCurrentIndexState(selectedFile - picsStartIndex);
    }, [selectedFile]);

    const createAndSetTitleName = (title: string) => {
        setTitleName(`${title}.png`);
    }

    const handlePicClick = (picName: string) => {
        setPreviewActiveState(true);
        const index = pics.findIndex(pic => pic === picName);
        setCurrentIndexState(index)
        createAndSetTitleName(pics[index])
        setIconName(pictureIcon);
        setSelectedFile(picsStartIndex + index);

    }


    const generatePictureOverview = () => {

        const nextSlide = () => {
            if (currentIndexState < pics.length) {
                const newIndex = currentIndexState + 1;
                setCurrentIndexState(newIndex);
                createAndSetTitleName(pics[newIndex])
                setSelectedFile(picsStartIndex + newIndex);
            }
        };

        const prevSlide = () => {
            if (currentIndexState > 0) {
                const newIndex = currentIndexState - 1;
                setCurrentIndexState(newIndex);
                createAndSetTitleName(pics[newIndex]);
                setSelectedFile(picsStartIndex + newIndex);
            }
        };

        const goBack = () => {
            setPreviewActiveState(false);
            setIconName(picturesIcon);
            setTitleName('pictures');
            setSelectedFile(fileIndex);
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
                <button className={`${fileOverviewStyles.goBackButton}`}
                    onClick={goBack} >
                    go back
                </button>
            </div>
        )
    };



    return (
        <div className={`${fileOverviewStyles.root} `} >
            {previewActiveState ? generatePictureOverview() : <></>}
            <div className={`${fileOverviewStyles.pics}`}>
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

        </div >



    );
}
export default PicturesOverview;

