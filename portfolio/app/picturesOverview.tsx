import './css/global.css';
import fileOverviewStyles from './css/fileOverview.module.css';
import Image from "next/image";

interface Parameters {
    pics: string[];
}

const PicturesOverview = ({ pics }: Parameters) => {

    return (
        <div className={`${fileOverviewStyles.root} ${fileOverviewStyles.pics}`}>
            {pics.map((picName) => (
                <a className={`${fileOverviewStyles.picWrap}`} key={picName}>
                    <Image src={`/pictures/photography/${picName}.webp`}
                        alt={`${picName} preview`}
                        fill
                        priority
                        className={fileOverviewStyles.pic}
                        style={{ objectFit: 'cover' }}
                    />
                </a>


            ))}
        </div>


    );
}
export default PicturesOverview;

