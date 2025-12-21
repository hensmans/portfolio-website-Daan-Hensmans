
import { Fragment, useState } from 'react';
import './css/global.css';
import projectOverviewStyles from './css/projectOverview.module.css';
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

const ProjectOverview = ({ content }: Parameters) => {
    const tags = content.tags;
    const description = content.description;

    return (
        <div className={`${projectOverviewStyles.root}`}>
            <div className={`${projectOverviewStyles.wrapper}`}>
                {/* Left */}
                <div className={`${projectOverviewStyles.leftArea}`}>
                    {/* Title*/}
                    <div className={`${projectOverviewStyles.title}`} >
                        <p >{content.title}</p>
                    </div>

                    {/* Tags */}
                    <div className={`${projectOverviewStyles.tags}`}>
                        {tags.map((tag, index) => (
                            <Fragment key={index}>
                                <p className={`${projectOverviewStyles.tag}`}>{tag}</p>
                                {(index < tags.length - 1) && (
                                    <span>&nbsp;·&nbsp;</span>
                                )}
                            </ Fragment>

                        ))}
                    </div>
                    {/* Description */}
                    < div className={`${projectOverviewStyles.description}`}>
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
                <div className={`${projectOverviewStyles.rightArea}`}>
                    {/* Screenshots and videos */}
                    <div className={`${projectOverviewStyles.screenshots}`}>
                        <PictureSlideshow youtubeId={content.youtubeId} pictures={content.pictures} />
                    </div>
                    {/* Bullet points what you learned */}
                    <div className={`${projectOverviewStyles.bulletpoints}`}>
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

