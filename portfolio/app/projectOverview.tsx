import { Fragment, useState } from 'react';
import './css/global.css';
import fileOverviewStyles from './css/fileOverview.module.css';
import PictureSlideshow from './pictureSlideshow';
import { StaticImageData } from 'next/image';

interface Parameters {
    content: {
        title: string;
        tags: string[];
        description: string[];
        bulletPoints: string[];
        youtubeId: string | undefined;
        pictures: StaticImageData[];
    }
}

const ProjectOverview = ({ content }: Parameters) => {
    const tags = content.tags;
    const description = content.description;

    return (
        <div className={`${fileOverviewStyles.root}`}>
            <div className={`${fileOverviewStyles.wrapper}`}>
                {/* Left */}
                <div className={`${fileOverviewStyles.leftArea}`}>
                    {/* Title*/}
                    <div className={`${fileOverviewStyles.title}`} >
                        <p >{content.title}</p>
                    </div>
                    {/* Tags */}
                    <div className={`${fileOverviewStyles.tags}`}>
                        {tags.map((tag, index) => (
                            <Fragment key={index}>
                                <p className={`${fileOverviewStyles.tag}`}>{tag}</p>
                                {(index < tags.length - 1) && (
                                    <span>&nbsp;·&nbsp;</span>
                                )}
                            </ Fragment>
                        ))}
                    </div>
                    {/* Description */}
                    < div className={`${fileOverviewStyles.description}`}>
                        <br />
                        {description.map((subDescription, index) => (
                            < Fragment key={index}>
                                <p >{subDescription}</p>
                                {(index < description.length - 1) && (
                                    <br />
                                )}
                            </ Fragment>
                        ))}
                    </div>
                </div>
                {/* Right area */}
                <div className={`${fileOverviewStyles.rightArea}`}>
                    {/* Screenshots and videos */}
                    <div className={`${fileOverviewStyles.screenshots}`}>
                        <PictureSlideshow youtubeId={content.youtubeId} folder={''} pictures={content.pictures} />
                    </div>
                    {/* Bullet points what you learned */}
                    <div className={`${fileOverviewStyles.bulletpoints}`}>
                        <p>Knowledge gained:</p>
                        <ul>
                            {content.bulletPoints.map((subBulletPoint, index) => (
                                <li key={index}> <p>{subBulletPoint}</p></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >

    );
}
export default ProjectOverview;
