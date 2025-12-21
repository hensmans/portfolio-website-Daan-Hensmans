
import { useState } from 'react';
import './css/global.css';
import projectOverviewStyles from './css/projectOverview.module.css';
import PictureSlideshow from './pictureSlideshow';

const ProjectOverview = () => {


    return (
        <div className={`${projectOverviewStyles.root}`}>
            <div className={`${projectOverviewStyles.wrapper}`}>
                {/* Left */}
                <div className={`${projectOverviewStyles.leftArea}`}>
                    {/* Title*/}
                    <div className={`${projectOverviewStyles.title}`} >
                        <p >Desert Explorer</p>
                    </div>

                    {/* Tags */}
                    <div className={`${projectOverviewStyles.tags}`}>
                        <p className={`${projectOverviewStyles.tag}`}> Haskell </p>
                        &nbsp;·&nbsp;
                        <p className={`${projectOverviewStyles.tag}`}>2025 </p>
                        &nbsp;·&nbsp;
                        <a><p className={`${projectOverviewStyles.tag}`}>GitHub</p></a>
                    </div>
                    {/* Description */}
                    <div className={`${projectOverviewStyles.description}`}>
                        <br />
                        <p>
                            You are a desert explorer, in search for gold. But you have limited amount of water,
                            and therefore you need to drink something every n amount of steps.. or you will die.
                            Not only can you die from dehydration, but also from lava and from worms that appear randomly.
                            Once you are satisfied with the amount of gold you gathered, you can enter a portal to end the game.
                            If the player feels tired it can save the game and load it for another play session.
                        </p>
                        <br />
                        <p>
                            The game is fully programmed in Haskell, a pure function programming language. There are many concepts incorperated in this game.
                            To list a few; The map will go to infinity, and with the same seed it will also have the same tiles everytime.
                            All the worms are ran on a different threads through Software Transactional Memory.
                            Loading and saving the game is done through a parser and lexer.
                            And the game logic consists heavely on a functional pattern, monads.
                        </p>
                    </div>
                </div>
                {/* Right area */}
                <div className={`${projectOverviewStyles.rightArea}`}>
                    {/* Screenshots and videos */}
                    <div className={`${projectOverviewStyles.screenshots}`}>
                        <PictureSlideshow />
                    </div>
                    {/* Bullet points what you learned */}
                    <div className={`${projectOverviewStyles.bulletpoints}`}>
                        <p> Knowledge gained:</p>
                        <ul>
                            <li> <p>All the concepts of a pure functional language</p></li>
                            <li> <p>Software transactional memory (STM)</p></li>
                            <li> <p>Writing an parser and lexer to load and save the game state from/to a file</p></li>
                            <li> <p>Pseudo random generation in a consistent way, given a seed</p></li>
                            <li> <p>Monads</p></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div >

    );
}
export default ProjectOverview;

