import React from "react";
import style from "./Home.module.css";
import card from "./card3.png";
import { Parallax } from "react-scroll-parallax";
// import MissionStatement from "../../Components/MissonStatement/MissionStatement";
// import CardManagement from "../../Components/CardManagement/CardManagement";

const Home = () => {
  const data = [
    {
      image: card,
      title: "Democratize cards platform",
      content: [
        {
          contents:
            "Assemble in various combination and build on top of it as your customer demands",
        },
        { contents: "Reduce cost of ownership by using BYOC SaaS model" },
      ],
    },
    {
      image: card,
      title: "Retooling",
      content: [
        {
          contents:
            "Innovative Retooling to integrate & interoperate between technologies of different ages",
        },
        { contents: "Event Engine, Configurable API" },
      ],
    },
    {
      image: card,
      title: "Cloud Native",
      content: [
        { contents: "Achieve scalability at high-cost efficiency" },
        { contents: "Reduce your Carbon footprint" },
        {
          contents:
            "Reuse Out of box cloud provided solutions as lego function",
        },
        { contents: "Infinitely scalable & Global" },
      ],
    },
    {
      image: card,
      title: "Build & Implement like Lego Blocks",
      content: [
        { contents: "Make each function, Pluggable, Scalable, Replaceable" },
        { contents: "Transform with minimum upfront cost" },
        {
          contents: "Eliminate & rationalize legacy platform",
        },
      ],
    },
    {
      image: card,
      title: "Innovation in all fronts",
      content: [
        {
          contents:
            "Innovation not just in UI/UX, but in all levels of application as you decide",
        },
      ],
    },
    {
      image: card,
      title: "Complete Card solution ",
      content: [
        { contents: "Authorization" },
        { contents: "Card Management" },
        { contents: "Notification" },
        { contents: "Embossing Interface" },
        { contents: "Clearing" },
        { contents: "Transaction View" },
      ],
    },
  ];
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
      <div className={style.missionStatementContainer}>
        <h1 className={style.MissionStatement}>Misson Statement</h1>
        <p className={style.msContent}>
          We are here to democratize the cards processing platform
        </p>
        <div className={style.missionDetails}>
          {data.map((e) => (
            <div className={style.box}>
              <img className={style.image} src={e.image} />
              <h3 className={style.title}>{e.title}</h3>
              <div className={style.content}>
                {e.content.map((ele) => (
                  <p className={style.contents}>{ele.contents}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.cardManagementContainer}>
        <h1 className={style.MissionStatement}>Card Management System</h1>
        <p className={style.msContent}>Virtual / Physical Card Embossing</p>
        <div className={style.cardManagement}>
          <div className={style.cardManagementOption}>
            <p>Card</p>
            <p>Managament</p>
          </div>
          <div className={style.iconArrow}></div>
          <div className={style.cardManagementOption}>
            <p>Virtual / Physical</p>
            <p>Card Embossing</p>
          </div>
          <div className={style.iconArrow}></div>
          <div className={style.iconArrow}></div>
          <div className={style.cardManagementOption}>
            <p>Start Using The</p>
            <p>Card</p>
          </div>
          <div className={style.iconArrow}></div>
          <div className={style.cardManagementOption}>
            <p>Authorization</p>
          </div>
          <div className={style.iconArrow}></div>
          <div className={style.cardManagementOption}>
            <p>Control, Alerts</p>
            <p>Management</p>
            <p>Clearing</p>
          </div>
          <div className={style.iconArrow}></div>
          <div className={style.cardManagementOption}>
            <p>Clearing</p>
          </div>
          <div className={style.iconArrow}></div>
          <div className={style.iconArrow}></div>
          <div className={style.cardManagementOption}>
            <p>Leadgering System</p>
          </div>
          <div className={style.iconArrow}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
