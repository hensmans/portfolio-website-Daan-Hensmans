import taskBarStyles from './css/taskBar.module.css';
import React, { useState, useEffect } from 'react';

const Taskbar = () => {
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
        <div className={taskBarStyles.xpTaskbar}>
            <div className={taskBarStyles.startButton}>
                <span className={taskBarStyles.startText}>start</span>
            </div>

            <div className={taskBarStyles.taskItems}>
                <div className={`${taskBarStyles.taskItem} ${taskBarStyles.active}`}>My Documents</div>
                <div className={taskBarStyles.taskItem}>Internet Explorer</div>
            </div>

            <div className={taskBarStyles.systemTray}>
                <span className={taskBarStyles.trayIcon}>🔊</span>
                <span className={taskBarStyles.clock}>{time}</span>
            </div>
        </div>
    );
};

export default Taskbar;