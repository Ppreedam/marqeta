import React, { useEffect } from "react";
import style from "./Home.module.css";
import card from "./card3.png";
// import { Parallax } from "react-scroll-parallax";
import TimeLine from "../../Components/TimeLine/TimeLine";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoEarthOutline } from "react-icons/io5";
import { AiOutlineWifi } from "react-icons/ai";
import { BsMap } from "react-icons/bs";
// import MissionStatement from "../../Components/MissonStatement/MissionStatement";
// import CardManagement from "../../Components/CardManagement/CardManagement";

const Home = () => {
  useEffect(() => {
    const path = document.querySelector("path");
    console.log(path);
    const pathLength = path.getTotalLength();
    console.log(pathLength);
    path.style.strokeDasharray = pathLength + " " + pathLength;
    path.style.strokeDashoffset = pathLength;
    window.addEventListener("scroll", () => {
      let scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      let drawLength = pathLength * scrollPercentage;
      path.style.strokeDashoffset = pathLength - drawLength;
    });
    // return () => {
    //   // Cleanup: Remove the event listener when the component is unmounted
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []); // Empty dependency array to run the effect only once on mount
  // var path = this.refs.path;
  // var pathLength = path.getTotalLength()
  // let path = document.querySelector("path")
  // console.log(path)
  // let pathLength = path.getTotalLength()
  // console.log(pathLength);
  // path.style.strokeDasharray = pathLength + ' ' + pathLength;
  // path.style.strokeDashoffset = pathLength;
  // window.addEventListener('scroll',()=>{
  //   let scrollPercentage =(document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight);
  //   let drawLength = pathLength * scrollPercentage;
  //   path.style.strokeDashoffset = pathLength - drawLength;
  // })

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
          <img className={style.cardImage} src={card} alt="card" />
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
      <div className={style.cardManagementContainer}>
        <h1 className={style.MissionStatement}>Card Management System</h1>
        <p className={style.msContent}>Virtual / Physical Card Embossing</p>
        {/* <div className={style.cardManagement}> */}
        {/* <svg
            width="680"
            height="1025"
            viewBox="0 0 680 1025"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M677 3H3V1022H677V3Z" stroke="#003088" stroke-width="5" />
          </svg> */}

        {/* <div className={style.cardManagementOption}>
            <p>Card</p>
            <p>Managament</p>
          </div> */}
        {/* <div className={style.iconArrow}></div> */}
        {/* <div className={style.cardManagementOption}>
            <p>Virtual / Physical</p>
            <p>Card Embossing</p>
          </div> */}
        {/* <div className={style.iconArrow}></div>
          <div className={style.iconArrow}></div> */}
        {/* <div className={style.cardManagementOption}>
            <p>Start Using The</p>
            <p>Card</p>
          </div> */}
        {/* <div className={style.iconArrow}></div> */}
        {/* <div className={style.cardManagementOption}>
            <p>Authorization</p>
          </div> */}
        {/* <div className={style.iconArrow}></div> */}
        {/* <div className={style.cardManagementOption}>
            <p>Control, Alerts</p>
            <p>Management</p>
            <p>Clearing</p>
          </div> */}
        {/* <div className={style.iconArrow}></div> */}
        {/* <div className={style.cardManagementOption}>
            <p>Clearing</p>
          </div> */}
        {/* <div className={style.iconArrow}></div>
          <div className={style.iconArrow}></div> */}
        {/* <div className={style.cardManagementOption}>
            <p>Leadgering System</p>
          </div> */}
        {/* <div className={style.iconArrow}></div> */}
        {/* </div> */}
        <TimeLine />
      </div>
    </div>
  );
};

export default Home;
