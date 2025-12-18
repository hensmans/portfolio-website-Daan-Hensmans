import './css/global.css';
import webpage from './css/webpage.module.css';
import { differenceInYears } from "date-fns";

interface Parameters {
  maximizeState: boolean;
}
const AboutMe = ({ maximizeState }: Parameters) => {

  const currentAge = differenceInYears(new Date(), new Date("2001-03-01"));

  return (
    <div className={`${webpage.webpageRoot} ${(maximizeState) ? webpage.webpageRootMaximized : {}} ${webpage.centered}`}>
      <div className={`${webpage.rows} ${webpage.centered}`}>
        {/* <img className={webpage.blockSize} src="./welcomer.gif" /> */}

        <div className={`${webpage.columns}`}>
          <div className={`${webpage.rows} ${webpage.leftColumn}`}>
            <div className={`${webpage.textBox} ${webpage.boxBorder} ${webpage.textBoxPicure}`} />
            <p className={`${webpage.textBox} ${webpage.boxBorder} ${webpage.textVerySmall}`}>
              {currentAge} years old
              <br />
              From Belgium-Flanders-Leuven
              <br />
              Fluent in Dutch and English
            </p>
          </div>
          <div className={`${webpage.rows}`}>
            <p className={`${webpage.textBox} ${webpage.boxBorder} ${webpage.textBig}`}>
              Hey! My name is Daan Hensmans, I'm a software engineer from Belgium and I'm passionate about coding, problem-solving, and emerging technologies. Currently I'm still in University but I'm graduating in June 2026:)
            </p>
            <p className={`${webpage.textBox} ${webpage.boxBorder} ${webpage.textSmall}`}>
              My specialisation is programming in low-end applications. Like Compilers, low-level code (C, ASM-x86, Java, Haskell, Lisp), extending languages, etc.
              This is where I also have done a master in, "Software Engineering: Software Languages".
              Because of this I know the inner workings of all the tpye of languages, and therefore I can program in an efficient and secure way
              <br />
              <br />
              Ofcourse I'm also capable, and already done projects, in many high-end programming languages (Scala, Python, JavaScript, etc).
              More about all my projects are visible in the 'my projects' folder
            </p>
          </div>
        </div>
        {/* <div>i loveeeee coding
          <img src="./Computer.gif" />
        </div>
        <div className={`${webpage.small} ${webpage.smallPaddingVert}`}>i need money pls hire me</div>
        <div className={webpage.paddingVert} /> */}
      </div>
    </div>

  );
}
export default AboutMe;

