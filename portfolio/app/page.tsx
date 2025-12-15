import Image from "next/image";
import globalStyles from './globals.module.css';


export default function Home() {
  return (
    <div className="window" >
      <div className="title-bar">
        <div className="title-bar-text">
          My First Program
        </div>
      </div>
      <div className="window-body">
        <p>Hello, world!</p>
      </div>
    </div>
  );
}

