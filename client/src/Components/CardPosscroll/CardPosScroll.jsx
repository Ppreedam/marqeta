import React from 'react'
import Parallax, { Layer, AppearLayer } from "react-parallax-scroll";
import "./animated.css";
import "./styles.css";

const CardPosScroll = () => {
    return (
        <div>
            <Parallax>
                {/* <div className="header-50">
                    <AppearLayer
                        className="box center"
                        in="swing"
                        duration="1.5s"
                        loop="infinite"
                    >
                        <a href="" target="_blank">
                            Footer : Section
                        </a>
                    </AppearLayer>
                </div> */}
                <div className="footer" style={{ marginTop: "250px" }}>
                    <Layer
                        className="footer-content"
                        settings={{ speed: -0.3, type: ["translateY"] }}
                    >
                        <Layer settings={{ speed: 0.5, type: ["translateX"] }}>
                            <img className="pirate" src="https://www.marqeta.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwqi8u1luxsv0%2Fplatformspeed_raster.png%2F98db88a0e187c92c7b46521fe8a0dfb4%2Fplatformspeed_raster.png&w=3840&q=75" />
                        </Layer>


                        <img className="island" src="https://ftxglobal.com/wp-content/uploads/2021/01/pos-animation-2.gif" />
                    </Layer>
                </div>
            </Parallax>
        </div>
    )
}

export default CardPosScroll