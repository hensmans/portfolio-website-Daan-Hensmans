import Image from "next/image";
import globalStyles from './css/globals.module.css';
import { Dispatch, SetStateAction } from "react";
import './css/global.css';

interface ButtonSelectionProps {
    setSelectedButton: Dispatch<SetStateAction<string>>;
    iconName: string;
    title: string;
}

const PopupButton = ({ setSelectedButton, iconName, title }: ButtonSelectionProps) => {
    return (
        <div className={`${globalStyles.buttonBox} xp-icon-label`} onClick={() => setSelectedButton(iconName)}>
            <div className={`${globalStyles.iconBox}`}>
                <Image src={`/icons/${iconName}.png`}
                    alt={`Button to ${iconName}`}
                    fill
                    className={`${globalStyles.clickableImage}`}
                    priority // preloads
                />
            </div>
            <p className={`${globalStyles.iconFont}`}>{title}</p>
        </div>


    );
}
export default PopupButton;

