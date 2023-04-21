import React from "react";
import style from "./Home.module.css";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <h1>
          Modern card issuing that empowers innovators to change the world
        </h1>
        <button>Let's talk</button>
        <div className="custom-shape-divider-top-1681999912">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
