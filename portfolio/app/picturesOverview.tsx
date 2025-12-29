
import { Fragment, useState } from 'react';
import './css/global.css';
import fileOverviewStyles from './css/fileOverview.module.css';
import PictureSlideshow from './pictureSlideshow';

interface Parameters {
    content: {
        title: string;
        tags: string[];
        description: string[];
        bulletPoints: string[];
        youtubeId: string | undefined;
        pictures: string[];
    }
}

const PicturesOverview = ({ content }: Parameters) => {
    const tags = content.tags;
    const description = content.description;
    const bulletPoints = content.bulletPoints;

    return (
        <div className={`${fileOverviewStyles.root} ${fileOverviewStyles.readmeBackground}`}>
            TODO picture gallery
        </div>


    );
}
export default PicturesOverview;

