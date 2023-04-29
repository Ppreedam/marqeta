import React from "react";
import style from "./Home.module.css";
import card from "./card.png";
import { Parallax } from "react-scroll-parallax";

const Home = () => {
  return (
    <div>
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
          <img className={style.cardImage} src={card} alt="card" />
        </div>
      </div>

      <div className={style.box}>
        <div className={style.innerBox} scrollAxis="vertical">
          <Parallax className="Parallax-module__parallax--skrA3" scale={[0, 1]}>
            {/* <Element name="A" /> */}
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Home;
