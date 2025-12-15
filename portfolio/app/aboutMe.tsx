import './css/global.css';
import webpage from './css/webpage.module.css';

const AboutMe = () => {
  return (
    <div className={`${webpage.webpageRoot} ${webpage.centered}`}>
      <div className={`${webpage.rows} ${webpage.centered}`}>
        <img className={webpage.blockSize} src="./welcomer.gif" />

        <div>my name is daan hensmans</div>
        <div>i loveeeee coding
          <img src="./Computer.gif" />
        </div>
        <div className={`${webpage.small} ${webpage.smallPaddingVert}`}>i need money pls hire me</div>
        <div className={webpage.paddingVert} />
      </div>
    </div>

  );
}
export default AboutMe;

