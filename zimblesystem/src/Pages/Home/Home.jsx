import React from "react";
import style from "./Home.module.css";
import card from "./card3.png";
import { Parallax } from "react-scroll-parallax";
import MissionStatement from "../../Components/MissonStatement/MissionStatement";


const Home = () => {
  return (
    <div className={style.mainBox}>
      <div className={style.container}>
        <div className={style.bannerContent}>
          <h1 className={style.header1}>Cloud Native & Complete Card</h1>
          <h2 className={style.header2}>Solutions</h2>
          <h3 className={style.header3}>
            Instantly issue & process card payments with our open API platform
          </h3>
          <button className={style.letstalk}>Let's talk</button>
        </div>
        <div className={style.bannerImage}>
          <Parallax
            x={[400, 0]}
            y={[-900, 0]}
            scale={[1, 0.7]}
            rotate={[158, -360]}
            easing="easeInQuad"
            opacity={[1, 0]}
          >
            <img className={style.cardImage} src={card} alt="card" />
          </Parallax>
        </div>
      </div>
      <div className={style.missionStatement}>
        <MissionStatement />
      </div>
      {/* <div className={style.box}>
        <div className={style.innerBox} scrollAxis="vertical"></div>
      </div> */}
      
    </div>
  );
};

export default Home;
