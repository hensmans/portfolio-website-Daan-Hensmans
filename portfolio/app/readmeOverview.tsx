
import { Fragment, useState } from 'react';
import fileOverviewStyles from './css/fileOverview.module.css';
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

const ReadMeOverview = ({ content }: Parameters) => {
    const [markdownTransformedState, setMarkdownTransformedState] = useState(true);
    const tags = content.tags;
    const description = content.description;
    const bulletPoints = content.bulletPoints;

    return (
        <div className={`${fileOverviewStyles.root}`}>
            <div className={`${fileOverviewStyles.readMeRoot}`}>
                <div className={`${fileOverviewStyles.readMeWrapper}  ${fileOverviewStyles.readmeBackground}`}>
                    {markdownTransformedState
                        ? <div>
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
                                        <div>
                                            <div className={`${fileOverviewStyles.markdownBulletpoint}`}>
                                                <p><strong>{bulletPoints[index * 2]}</strong>&nbsp;&rarr;&nbsp;</p>
                                                <p className={`${fileOverviewStyles.markdownBulletpointText}`} >{bulletPoints[index * 2 + 1]}</p>
                                            </div>
                                            <br />
                                            <br />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                Most of the projects source code is available at <a href="https://github.com/hensmans" target="_blank">my GitHub account</a>.
                            </p>
                            <p><br /></p>
                        </div>
                        : <div>
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
                            <p>Most of the projects source code is available at [my GitHub account](https://github.com/hensmans).</p>
                            <p><br /></p>
                        </div>
                    }
                </div>

                {/* Switch button */}
                <button className={`${fileOverviewStyles.readmeSwitchButton}`} onClick={() => setMarkdownTransformedState(!markdownTransformedState)}>
                    {markdownTransformedState ? "Disable markdown" : "Enable markdown"}
                </button>
            </div>


        </div >


    );
}
export default ReadMeOverview;

