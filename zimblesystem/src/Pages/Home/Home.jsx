import React from "react";
import style from "./Home.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import card from "./card.png"

const Home = () => {
  return (
    <div>
      <Navbar />
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
    </div>
  );
};

export default Home;
