import React from "react";
import Styles from "./Aboutus.module.css";
import image from "./myimage.jpg";
const Aboutus = () => {
  const LeaderImages = [
    {
      img: image,
      name: "Vishal Gholve",
      company_name: "CEO & Co-founder",
    },
    {
      img: image,
      name: "Vishal Gholve",
      company_name: "CEO & Co-founder",
    },
    {
      img: image,
      name: "Vishal Gholve",
      company_name: "CEO & Co-founder",
    },
  ];
  return (
    <div>
      <div className={Styles.topPart}>
        <div>
          <h1>Accelerating the world towards invisible payments</h1>
          <p>
            Omni Stack core and processing for FIs, and embeddable banking tech
            for fintechs and distributors
          </p>
        </div>
      </div>
      <div className={Styles.second}>
        At Zeta, we are rethinking payments from core to the edge. The
        algorithms to form factors. The applications to solutions. Led by the
        vision to make payments invisible and seamless, Zeta has built an Omni
        Stack for financial institutions for credit, DDA, prepaid, loans,
        savings, processing, authentication and FRM.
      </div>
      <div className={Styles.leadership_team}>
        <div className={Styles.leadership_header}>
          <h4>Leadership team</h4>
        </div>
        <div className={Styles.leadership_profile}>
          {LeaderImages &&
            LeaderImages.map((el, i) => {
              return (
                <div key={i + 1}>
                  <img src={el.img}></img>
                  <h4>{el.name}</h4>
                  <p>{el.company_name}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div className={Styles.sale}>
      <div className={Styles.sale_team}>
        <div className={Styles.sale_header}>
          <h4>Sales team</h4>
        </div>
        <div className={Styles.sale_profile}>
          {LeaderImages &&
            LeaderImages.map((el, i) => {
              return (
                <div key={i + 1}>
                  <img src={el.img}></img>
                  <h4>{el.name}</h4>
                  <p>{el.company_name}</p>
                </div>
              );
            })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Aboutus;
