import fileOverviewStyles from './css/fileOverview.module.css';
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from 'react';



interface Parameters {
    pics: { name: string, picture: StaticImageData }[];
    setIconName: Dispatch<SetStateAction<StaticImageData>>;
    setTitleName: Dispatch<SetStateAction<string>>;
    setSelectedFile: Dispatch<SetStateAction<number>>;
    selectedFile: number;
    picturesIcon: StaticImageData;
    pictureIcon: StaticImageData;
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
        const index = pics.findIndex(pic => pic.name === picName);
        setCurrentIndexState(index);
        createAndSetTitleName(pics[index].name);
        setIconName(pictureIcon);
        setSelectedFile(picsStartIndex + index);

    }


    const generatePictureOverview = () => {

        const nextSlide = () => {
            if (currentIndexState < pics.length) {
                const newIndex = currentIndexState + 1;
                setCurrentIndexState(newIndex);
                createAndSetTitleName(pics[newIndex].name)
                setSelectedFile(picsStartIndex + newIndex);
            }
        };

        const prevSlide = () => {
            if (currentIndexState > 0) {
                const newIndex = currentIndexState - 1;
                setCurrentIndexState(newIndex);
                createAndSetTitleName(pics[newIndex].name);
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
                <div className={`${fileOverviewStyles.previewRootWrapper}`}>
                    <button className={`${fileOverviewStyles.controls}`} onClick={prevSlide} disabled={currentIndexState === 0}>
                        {"<"}
                    </button>
                    {/* The image */}
                    {pics.map((pic, i) => (
                        <div
                            key={i} className={`${fileOverviewStyles.previewPicWrapper}`}
                            style={{ display: currentIndexState === i ? '' : 'none' }}>
                            <Image src={pic.picture}
                                alt={`Picture ${pic.name} preview`}
                                width={0} height={0} sizes="100vw"
                                className={fileOverviewStyles.previewPic}
                            />
                        </div>
                    ))}
                    <button className={`${fileOverviewStyles.controls}`} onClick={nextSlide} disabled={currentIndexState === pics.length - 1}>
                        {">"}
                    </button>
                    <button className={`${fileOverviewStyles.goBackButton}`}
                        onClick={goBack} >
                        To overview
                    </button>
                </div>
            </div>
        )
    };



    return (
        <div className={`${fileOverviewStyles.root} `} >
            <div className={fileOverviewStyles.picsOuter}>
                {previewActiveState ? generatePictureOverview() : <></>}
                <div className={`${fileOverviewStyles.pics}`}>
                    {pics.map((pic, index) => (
                        <a className={`${fileOverviewStyles.picWrap}`} key={index}
                            onClick={() => handlePicClick(pic.name)}>
                            <Image src={pic.picture}
                                alt={`${pic.name} preview`}
                                fill
                                className={fileOverviewStyles.pic}
                                placeholder="blur"
                                style={{ objectFit: 'cover' }}
                            />
                        </a>
                    ))}
                </div>
            </div>

        </div >



    );
}
export default PicturesOverview;

