import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./Platform.module.css";

const Platform = () => {
  return (
    <div className={style.container}>
      <div>
        <Navbar />
      </div>
      <div className={style.banner}>
        <div>
          <div className={style.payment}>Payment Platform Overview</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Platform;
