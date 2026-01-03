import Image from "next/image";
import popupButtonStyles from './css/popupButton.module.css';
import { Dispatch, SetStateAction } from "react";
import './css/global.css';
import './css/global.css'
interface ButtonSelectionProps {
    setSelectedButton: Dispatch<SetStateAction<string>>;
    iconName: string;
    title: string;
}

const PopupButton = ({ setSelectedButton, iconName, title }: ButtonSelectionProps) => {
    return (
        <div className={`${popupButtonStyles.buttonBox} xp-icon-label noSelect clickable`} onClick={() => setSelectedButton(iconName)}>
            <div className={`${popupButtonStyles.iconBox}`}>
                <Image src={`/icons/${iconName}.webp`}
                    alt={`Button to ${iconName}`}
                    fill
                    className={`${popupButtonStyles.clickableImage}`}
                    priority // preloads
                />
            </div>
            <p className={`${popupButtonStyles.iconFont}`}>{title}</p>
        </div>


    );
}
export default PopupButton;

