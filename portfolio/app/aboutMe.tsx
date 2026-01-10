import aboutMeStyles from './css/aboutMe.module.css';
import { differenceInYears } from "date-fns";
import PictureSlideshow from './pictureSlideshow';

// Pictures
import aboutme_1Pic from '../assets/pictures/aboutme/aboutme_1.webp';
import aboutme_7Pic from '../assets/pictures/aboutme/aboutme_7.webp';
import aboutme_2Pic from '../assets/pictures/aboutme/aboutme_2.webp';
import aboutme_4Pic from '../assets/pictures/aboutme/aboutme_4.webp';
import aboutme_3Pic from '../assets/pictures/aboutme/aboutme_3.webp';
import aboutme_8Pic from '../assets/pictures/aboutme/aboutme_8.webp';

interface Parameters {
  maximizeState: boolean;
}
const AboutMe = ({ maximizeState }: Parameters) => {

  const currentAge = differenceInYears(new Date(), new Date("2001-03-01"));

  return (
    <div className={`${aboutMeStyles.webpageRoot}`}>
      <div className={`${aboutMeStyles.rows} ${aboutMeStyles.webpageBackground} ${aboutMeStyles.content}
                    ${(maximizeState) ? aboutMeStyles.webpageRootMaximized : aboutMeStyles.webpageRootMinimized}`}>

        <div className={`${aboutMeStyles.columns} `}>
          <div className={`${aboutMeStyles.rows} ${aboutMeStyles.leftColumn} `}>
            <div className={`${aboutMeStyles.boxBorder} ${aboutMeStyles.textBoxPicture}`} >
              <PictureSlideshow youtubeId={undefined} pictures={[aboutme_1Pic, aboutme_7Pic, aboutme_2Pic, aboutme_4Pic]} />
            </div>
            <div className={`${aboutMeStyles.textBox} ${aboutMeStyles.boxBorder} `}>
              <ul className={`${aboutMeStyles.bulletPoints}`}>
                <li>
                  <p>{currentAge} years old</p>
                </li>
                <br />
                <li>
                  <p>From Belgium (Flemish-Brabant, Leuven)</p>
                </li>
                <br />
                <li>
                  <p>Fluent in Dutch and English</p>
                </li>
              </ul>
            </div>

          </div>
          <div className={`${aboutMeStyles.rows} ${aboutMeStyles.rightColumn}`}>
            <div className={`${aboutMeStyles.titleWrapper}`}>
              <p className={`${aboutMeStyles.title}`}>Hey! My name is<br />Daan Hensmans</p>
              <img className={aboutMeStyles.titleGif} src="./welcomer.gif" />
            </div>
            <div className={`${aboutMeStyles.textBox} ${aboutMeStyles.boxBorder} `}>
              <p>Based in Belgium, I specialize in navigating complex software problems with elegant, scalable solutions.</p>
              <p><br /></p>
              <p>Currently pursuing a Master’s degree in Software Engineering: Software Languages, graduating in June 2026.</p>
            </div>
            <div className={`${aboutMeStyles.textBox} ${aboutMeStyles.boxBorder} `}>
              <p>Specialist in Software Languages and Systems Programming.</p>
              <p><br /></p>
              <p>
                My background in compiler construction and low-level development (C, ASM, Lisp) gives me a unique perspective on software architecture.
                I don't just use languages; I study their inner workings to ensure my code is as efficient and secure as possible.
              </p>
              <p><br /></p>
              <p>Browse my 'projects' folder for a deep dive into my work.</p>
            </div>
            <div className={`${aboutMeStyles.textBox} ${aboutMeStyles.boxBorder} ${aboutMeStyles.contactInfo}`}>
              <a href="https://www.linkedin.com/in/hensmans/" target="_blank"><p>LinkedIn</p></a>
              <a href="mailto:Daan.Hensmans@gmail.com" target="_blank" rel="noopener"><p>Email</p></a>
              <a href="https://github.com/hensmans" target="_blank"><p>GitHub</p></a>
            </div>
          </div>
        </div>
        <div className={aboutMeStyles.computerGif} >
          <img src="./Computer.gif" />
        </div>
      </div>
    </div >

  );
}
export default AboutMe;

