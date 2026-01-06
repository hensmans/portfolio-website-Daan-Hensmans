import taskBarStyles from './css/taskBar.module.css';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Image from "next/image";
// Pics
import mutePic from '../assets/icons/Mute.webp';
import volumePic from '../assets/icons/Volume.webp';
import myComputerPic from '../assets/icons/My Computer.webp';
import aboutmePic from '../assets/icons/aboutme.webp';
import cvPic from '../assets/icons/cv.webp';
import projectsPic from '../assets/icons/projects.webp';
import picturesPic from '../assets/icons/pictures.webp';
import shutDownPic from '../assets/icons/shut_down.webp';
import windowsXPLogoPic from '../assets/icons/Windows-xp-logo.webp';

interface Parameters {
    toggleMutedState: () => void;
    setMonitorOnState: Dispatch<SetStateAction<boolean>>;
    setSelectedButton: Dispatch<SetStateAction<string>>;
    mutedState: boolean;
}


const Taskbar = ({ toggleMutedState, mutedState, setMonitorOnState, setSelectedButton }: Parameters) => {
    const [time, setTime] = useState('');
    const [isStartOpen, setIsStartOpen] = useState(false);
    const [isOnStartPopup, setIsOnStartPopup] = useState(false);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        setIsStartOpen(isOnStartPopup);
    }, [isOnStartPopup]);

    const onPopupClick = (name: string) => {
        setSelectedButton(name);

    }

    const muteIcon = <Image src={mutePic}
        alt={`Sound mute icon`}
        fill
        priority // preloads
        className={taskBarStyles.muteIcon}
    />
    const volumeIcon = <Image src={volumePic}
        alt={`Sound unmute icon`}
        fill
        priority // preloads
        className={taskBarStyles.muteIcon}
    />

    const generatePopupButton = () => {
        return (
            <div className={`${taskBarStyles.popup} ${isStartOpen ? {} : taskBarStyles.startPopupClosed}`}
            >
                <div className={`${taskBarStyles.popupTopBar} ${taskBarStyles.popupText}`}>
                    <Image src={myComputerPic}
                        alt={`my computer icon`}
                        fill
                        priority // preloads
                        className={`${taskBarStyles.popupContentLogo}`}
                    />
                    Daan Hensmans Portfolio
                </div>
                <div className={`${taskBarStyles.popupContent}`}>
                    <div className={`${taskBarStyles.popupContentElement} clickable`} onClick={() => onPopupClick('aboutme')}>
                        <Image src={aboutmePic}
                            alt={`aboutMe icon`}
                            fill
                            priority // preloads
                            className={taskBarStyles.popupContentLogo}
                        />
                        aboutMe.html
                    </div>
                    <div className={`${taskBarStyles.popupContentElement} clickable`} onClick={() => onPopupClick('cv')}>
                        <Image src={cvPic}
                            alt={`CV icon`}
                            fill
                            priority // preloads
                            className={taskBarStyles.popupContentLogo}
                        />
                        cv.pdf
                    </div>
                    <div className={`${taskBarStyles.popupContentElement} clickable`} onClick={() => onPopupClick('projects')}>
                        <Image src={projectsPic}
                            alt={`Projects icon`}
                            fill
                            priority // preloads
                            className={taskBarStyles.popupContentLogo}
                        />
                        projects
                    </div>
                    <div className={`${taskBarStyles.popupContentElement} clickable`} onClick={() => onPopupClick('pictures')}>
                        <Image src={picturesPic}
                            alt={`Pictures icon`}
                            fill
                            priority // preloads
                            className={taskBarStyles.popupContentLogo}
                        />
                        pictures
                    </div>
                </div>
                <div className={`${taskBarStyles.popupBottomBar} ${taskBarStyles.popupTurnoffField} `} >
                    <div className={` ${taskBarStyles.popupTurnoffFieldInner} clickable`} onClick={() => setMonitorOnState(false)}>
                        <Image src={shutDownPic}
                            alt={`shut down icon`}
                            fill
                            priority // preloads
                            className={`${taskBarStyles.popupContentLogo} clickable`}
                        />
                        <div className={`${taskBarStyles.popupText}`}>Turn Computer Off</div>
                    </div>
                </div>

            </div >
        );
    }

    return (
        <div className={`${taskBarStyles.xpTaskbar} noSelect`} >
            <div className={`${taskBarStyles.startButtonWrapped}`}
                onMouseLeave={() => setIsOnStartPopup(false)}
                onMouseEnter={() => setIsOnStartPopup(true)}>
                {generatePopupButton()}
                <div className={`${taskBarStyles.startButton} clickable`} >
                    <div className={`${taskBarStyles.xpLogo}`} onClick={() => setIsStartOpen(true)}>
                        <Image src={windowsXPLogoPic}
                            alt={`Windows XP icon`}
                            fill
                            priority // preloads
                            className={taskBarStyles.image}
                        />
                    </div>
                    <span className={taskBarStyles.startText}>start</span>
                </div>
            </div>


            <div className={taskBarStyles.taskItems}>
                {/* <div className={`${taskBarStyles.taskItem} ${taskBarStyles.active}`}>My Documents</div>
                <div className={taskBarStyles.taskItem}>Internet Explorer</div> */}
            </div>

            <div className={`${taskBarStyles.systemTray} clickable`}>
                <span onClick={toggleMutedState} >
                    {mutedState
                        ? muteIcon
                        : volumeIcon
                    }
                    {time}
                </span>
            </div>
        </div>
    );
};

export default Taskbar;