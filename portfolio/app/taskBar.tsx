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
                    <Image src={`/icons/windows-xp-logo.ico`}
                        alt={`Windows XP icon`}
                        fill
                        priority // preloads
                    />
                </div>
                <span className={taskBarStyles.startText}>start</span>
            </div>

            <div className={taskBarStyles.taskItems}>
                {/* <div className={`${taskBarStyles.taskItem} ${taskBarStyles.active}`}>My Documents</div>
                <div className={taskBarStyles.taskItem}>Internet Explorer</div> */}
            </div>

            <div className={taskBarStyles.systemTray}>
                <span className={taskBarStyles.trayIcon} onClick={toggleMutedState}>
                    {mutedState ? '🔇' : '🔊'}
                </span>
                <span className={taskBarStyles.clock}>{time}</span>
            </div>
        </div>
    );
};

export default Taskbar;