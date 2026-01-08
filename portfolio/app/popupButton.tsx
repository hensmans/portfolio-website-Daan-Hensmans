import Image from "next/image";
import popupButtonStyles from './css/popupButton.module.css';
import { Dispatch, SetStateAction } from "react";
import globalStyles from './css/global.module.css';
import { StaticImageData } from 'next/image';

interface Parameters {
    setSelectedButton: Dispatch<SetStateAction<string>>;
    iconName: string;
    icon: StaticImageData;
    title: string;
}

const PopupButton = ({ setSelectedButton, iconName, title, icon }: Parameters) => {
    return (
        <div className={`${popupButtonStyles.buttonBox} xp-icon-label ${globalStyles.noSelect} ${globalStyles.clickable}`} onClick={() => setSelectedButton(iconName)}>
            <div className={`${popupButtonStyles.iconBox}`}>
                <Image src={icon}
                    alt={`Button to ${iconName}`}
                    fill
                    className={`${popupButtonStyles.clickableImage}`}
                    priority
                />
            </div>
            <div className={`${popupButtonStyles.iconFont} `}>{title}</div>
        </div>


    );
}
export default PopupButton;

