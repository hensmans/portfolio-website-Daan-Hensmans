
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

const ReadMeOverview = ({ content }: Parameters) => {
    const tags = content.tags;
    const description = content.description;
    const bulletPoints = content.bulletPoints;

    return (
        <div className={`${fileOverviewStyles.root} ${fileOverviewStyles.readmeBackground}`}>
            <div className={`${fileOverviewStyles.readMeWrapper}`}>
                <div className={`${fileOverviewStyles.readMeLeftArea}`}>
                    {/* Markdown Description */}
                    <p><br /></p>
                    <p># {content.title}</p>
                    <p><br /></p>
                    <p>---</p>
                    <p><br /></p>
                    {description.map((subDescription, index) => (
                        < Fragment key={index}>
                            <p >{subDescription}</p>
                            {(index < description.length - 1) && (
                                <p><br /></p>
                            )}
                        </ Fragment>
                    ))}
                    {Array.from({ length: bulletPoints.length / 2 }).map((subBulletPoint, index) => (
                        <p key={index}>
                            <br />
                            -&nbsp;&nbsp;**{bulletPoints[index * 2]}** &nbsp; -&gt; &nbsp; {bulletPoints[index * 2 + 1]}
                        </p>
                    ))}
                    <p><br /></p>
                    <p>Most of the projects source code is available at [my GitHub account](https://github.com/Daaninator).</p>


                </div >
                <div className={` ${fileOverviewStyles.readMeRightArea}`}>
                    {/* Description */}
                    <p><br /></p>
                    <div className={`${fileOverviewStyles.markdownTitle}`} >
                        <p >{content.title}</p>

                    </div>
                    <p><br /></p>
                    {description.map((subDescription, index) => (
                        < Fragment key={index}>
                            <p >{subDescription}</p>
                            {(index < description.length - 1) && (
                                <p><br /></p>
                            )}
                        </ Fragment>
                    ))}
                    <ul>
                        {Array.from({ length: bulletPoints.length / 2 }).map((subBulletPoint, index) => (
                            <li key={index}>
                                <p><strong>{bulletPoints[index * 2]}</strong>&nbsp;&rarr; &nbsp; {bulletPoints[index * 2 + 1]}</p></li>
                        ))}
                    </ul>
                    <p>
                        Most of the projects source code is available at <a href="https://github.com/Daaninator">my GitHub account</a>.
                    </p>
                </div>
            </div>


        </div>


    );
}
export default ReadMeOverview;

