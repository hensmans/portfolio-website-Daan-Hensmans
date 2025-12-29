import taskBarStyles from './css/taskBar.module.css';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Image from "next/image";


interface ButtonSelectionProps {
    toggleMutedState: () => void;
    mutedState: boolean;
}


const Taskbar = ({ toggleMutedState, mutedState }: ButtonSelectionProps) => {
    const [time, setTime] = useState('');
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className={`${taskBarStyles.xpTaskbar} noSelect`} >
            <div className={taskBarStyles.startButton}>
                <div className={`${taskBarStyles.xpLogo}`}>
                    <Image src={`/icons/Windows-xp-logo.png`}
                        alt={`Windows XP icon`}
                        fill
                        priority // preloads
                        className={taskBarStyles.image}
                    />
                </div>
                <span className={taskBarStyles.startText}>&nbsp;start</span>
            </div>

            <div className={taskBarStyles.taskItems}>
                {/* <div className={`${taskBarStyles.taskItem} ${taskBarStyles.active}`}>My Documents</div>
                <div className={taskBarStyles.taskItem}>Internet Explorer</div> */}
            </div>

            <div className={taskBarStyles.systemTray}>

                <span onClick={toggleMutedState}>
                    <Image src={mutedState ? `/icons/Mute.png` : `/icons/Volume.png`}
                        alt={`Sound mute/unmute icon`}
                        fill
                        priority // preloads
                        className={taskBarStyles.muteIcon}
                    />
                    {time}</span>
            </div>
        </div>
    );
};

export default Taskbar;