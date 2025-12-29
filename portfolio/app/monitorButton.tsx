"use client";
import { Dispatch, SetStateAction, useState } from 'react';
import monitorButtonStyles from './css/monitorButton.module.css';

interface Parameters {
    setMonitorOnState: Dispatch<SetStateAction<boolean>>;
    monitorOnState: boolean;
}

export default function MonitorButton({ monitorOnState, setMonitorOnState }: Parameters) {

    return (
        <div className={monitorButtonStyles.panel}>
            {/* LED Light Indicator */}
            <div className={`${monitorButtonStyles.led} ${monitorOnState ? monitorButtonStyles.ledOn : monitorButtonStyles.ledOff}`} />
            {/* The Block Button */}
            <button className={monitorButtonStyles.retroButton}
                onClick={() => setMonitorOnState(!monitorOnState)} />
        </div>
    );
}