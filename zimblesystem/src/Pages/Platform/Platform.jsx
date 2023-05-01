import React from "react";
import style from "./Platform.module.css";

const Platform = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.platformBanner}>
          <div className={style.leftPlatformBanner}>
            <div className={style.bannerHeader}>Payment Platform Overview</div>
            <div className={style.bannerSubHeader}>
              Physical And Virtual cards Platform
            </div>
            <div className={style.bannerContent}>
              Leverage our modern technology and flexible platform to create
              your own payment experiences across the world.
            </div>
            <button className={style.requestDemo}>Request a demo</button>
          </div>
          <div className={style.rightPlatformBanner}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Ct4WEhFIVwA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
