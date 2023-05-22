import React from "react";
import style from "./Platform.module.css";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoEarthOutline } from "react-icons/io5";
import { AiOutlineWifi } from "react-icons/ai";
import { BsMap } from "react-icons/bs";

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
          <div>
            <p>Zimble System</p>
          </div>
          <div>
            <p>Container Repository</p>
          </div>
          <div></div>
        </div>
        <div className={style.mainline}>
          <p>
            Implementation / <br />
            Release
          </p>
          <div className={style.line}></div>
        </div>
        <div className={style.democratize_right_mainbox}>
          <div className={style.democratize_right_first_mainbox}>
            <div>
              <p>
                Services <br /> Dashboard
              </p>
            </div>
            <div>
              <p>
                infrastructure <br /> Dashboard
              </p>
            </div>
          </div>
          <div className={style.democratize_right_second_mainbox}>
            <div>
              <p>
                Container <br /> Deployment
              </p>
            </div>
            <div>
              <p>
                Services <br /> Dashboard
              </p>
            </div>
            <div>
              <p>
                Container <br /> Deployment
              </p>
            </div>
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
              <MdOutlineNotificationsActive className={style.notification} />
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
              <MdOutlineNotificationsActive className={style.notification} />
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
              <IoEarthOutline className={style.notification} />
            </div>
            <p>Notification</p>
          </div>
          <div>
            <div>
              <AiOutlineWifi className={style.notification} />
            </div>
            <p>Notification</p>
          </div>
          <div>
            <div>
              <BsMap className={style.notification} />
            </div>
            <p>Notification</p>
          </div>
        </div>
      </div>
      <div className={style.unique}>
        <div className={style.uniqueDetails}>
          <p className={style.uniqueDetailsPara}>
            What makes ZimbleSystem different?
          </p>
          <p className={style.uniqueDetailsPara}>
            The ZimbleSystem Platform lets you develop and lunch innovative,
          </p>
          <p className={style.uniqueDetailsPara}>
            global, and trusted payment solutions at unprecedented speed
          </p>
        </div>
        <div className={style.uniqueFlowChart}>
          <div className={style.uniqueFlowChartLeft}>
            <div className={style.uniqueFlowChartLeftOption}>
              <p>API Event Source</p>
            </div>
            <div className={style.uniqueFlowChartLeftOption}>
              <p>Batch Event Source</p>
            </div>
            <div className={style.uniqueFlowChartLeftOption}>
              <p>Authorization</p>
            </div>
            <div className={style.uniqueFlowChartLeftOption}>
              <p>Clearing</p>
            </div>
            <div className={style.uniqueFlowChartLeftOption}>
              <p>3rdParty</p>
            </div>
            <div className={style.uniqueFlowChartLeftOption}>
              <p>Acs</p>
            </div>
            <div className={style.uniqueFlowChartLeftOption}>
              <p>Data Warehouse</p>
            </div>
            <div className={style.uniqueFlowChartLeftOption}>
              <p>Scheme File</p>
            </div>
            <div className={style.uniqueFlowChartLeftOption}>
              <p>Mailers</p>
            </div>
            <div className={style.uniqueFlowChartLeftOption}>
              <p>Embossing</p>
            </div>
            <div className={style.uniqueFlowChartLeftOption}>
              <p>Event History</p>
            </div>
            <div className={style.uniqueFlowChartLeftOption}>
              <p>Cloud Native</p>
            </div>
            <div className={style.uniqueFlowChartLeftOption}>
              <p>Event Driven Engine</p>
            </div>
          </div>
          <div className={style.uniqueFlowChartRight}>
            <div className={style.uniqueFlowChartRightContents}>
              <ul>
                <li>
                  Event Driven Architecture
                </li>
                <li>
                  Rules based distributed event engine
                </li>
              </ul>
            </div>
            <div className={style.uniqueFlowChartRightContents}>
              <ul>
                <li>Cloud Native Architecture</li>
                <li>Hybrid Cloud Environment (Cloud + On Prime)</li>
                <li>Cloud Agnostic Deployment</li>
                <li>Infrastructure as code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Platform
