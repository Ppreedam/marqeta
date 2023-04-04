import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";
import cardChip from "./image/card_chip.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function App() {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div>
      {/* <div className={styles.background} /> */}

      <Parallax pages={5}>
        <ParallaxLayer
          offset={0.1}
          speed={0.5}
          style={{  justifyContent: "start" }}
        >
          <p className={styles.scrollText}>
            Modern card issuing that empowers innovators to change the world
          </p>
          <p className={styles.scrollTextPara}>
            Instantly issue & process card payments with our open API platform.
          </p>
          <div className={styles.letsTalk}>
            <IoIosArrowDroprightCircle className={styles.icon}/>
            <p className={styles.letsTalkContent}>Let's talk</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.5}
          sticky={{ start: 0, end: 1 }}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <img className={styles.cardChip} src={cardChip} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
