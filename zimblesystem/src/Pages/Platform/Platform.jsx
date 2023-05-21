import React from "react";
import style from "./Platform.module.css";
import { MdOutlineNotificationsActive } from "react-icons/md"
import { FiLock } from "react-icons/fi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoEarthOutline } from "react-icons/io5"
import { AiOutlineWifi } from "react-icons/ai"
import { BsMap } from "react-icons/bs"


const Platform = () => {
  return (
    <div>
      {/* First section */}
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
      {/* Section second */}
      <h1 className={style.textcenter}>Democratize Cards Platform</h1>
      <div className={style.democratize_mainbox}>
        <div className={style.democratize_left_mainbox}>
          <div><p>Zimble System</p></div>
          <div><p>Container Repository</p></div>
          <div></div>
        </div>
        <div className={style.mainline}>
          <p>Implementation / <br />Release</p>
          <div className={style.line}></div>
        </div>
        <div className={style.democratize_right_mainbox}>
          <div className={style.democratize_right_first_mainbox}>
            <div><p>Services <br /> Dashboard</p></div>
            <div><p>infrastructure <br /> Dashboard</p></div>
          </div>
          <div className={style.democratize_right_second_mainbox}>
            <div><p>Container <br /> Deployment</p></div>
            <div><p>Services <br /> Dashboard</p></div>
            <div><p>Container <br /> Deployment</p></div>
          </div>
          <div className={style.democratize_right_third_mainbox}>
            <div>
              <p>Infrastructure normalization</p>
            </div>
          </div>
          <div className={style.democratize_right_fourth_mainbox}>
            <div>
              <p>Customer applications</p>
            </div>
          </div>
        </div>
      </div>
      {/* Section third Card management system */}
      <div className={style.card_management_mainbox}>
        <p>Card Management Provides</p>
        <div className={style.card_management_secondbox}>
          <div>
            <div>
              < MdOutlineNotificationsActive className={style.notification} />
            </div>
            <p>Notification</p>
          </div>
          <div>
            <div>
              <FiLock className={style.notification} />
            </div>
            <p>Key Management</p>
          </div>
          <div>
            <div>
              <MdOutlineModeEditOutline className={style.notification} />
            </div>
            <p>Authorization</p>
          </div>
          <div>
            <div>
              <FaHandHoldingMedical className={style.notification} />
            </div>
            <p>Settlement</p>
          </div>
          <div>
            <div>
              <FiSettings className={style.notification} />
            </div>
            <p>Settlement</p>
          </div>
          <div>
            <div>
              < MdOutlineNotificationsActive className={style.notification} />
            </div>
            <p>Notification</p>
          </div>
          <div>
            <div>
              <FiLock className={style.notification} />
            </div>
            <p>Key Management</p>
          </div>
          <div>
            <div>
              <IoEarthOutline className={style.notification}/>
            </div>
            <p>Notification</p>
          </div>
          <div>
            <div>
              <AiOutlineWifi className={style.notification}/>
            </div>
            <p>Notification</p>
          </div>
          <div>
            <div>
              <BsMap className={style.notification}/>
            </div>
            <p>Notification</p>
          </div>
        </div>
      </div>
      {/* fourth section */}
      {/* <div className={style.iconarrow}>

      </div> */}
      <div className={style.zimblesystem_difference_box}>
          <div>
            <p>What makes ZymbleSystem different?</p>
            <p>The Zymbelsystem platform lets you develop and launch innovative, global, and trusted payment solutions at unprecedented speed.</p>
          </div>
          <div>
            
          </div>
      </div>
    </div>
  );
};

export default Platform;
