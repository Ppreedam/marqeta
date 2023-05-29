import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import style from "./TimeLine.module.css";
const TimeLine = () => {
  return (
    // main box
    <div className={style.mainContainer}>
      <div className={style.container}>
        <VerticalTimeline className={style.containerBox} lineColor={"#003088"}>
          <VerticalTimelineElement
            iconStyle={{ background: "#003088", color: "red" }}
            contentArrowStyle={{ background: "#003088" }}
            contentStyle={{ borderRadius: "10px",color:"white", background:"#003088",font:"30px" }}
            className={style.cardManagementOption}
          >
            <p>Card</p>
            <p>Managament</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement contentStyle={{ borderRadius: "10px",color:"white", background:"#003088" }}>
            <p>Virtual / Physical</p>
            <p>Card Embossing</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement contentStyle={{ borderRadius: "10px",color:"white", background:"#003088" }}>
            <p>Start Using The</p>
            <p>Card</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement contentStyle={{ borderRadius: "10px",color:"white", background:"#003088" }}>
            <p>Authorization</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement contentStyle={{ borderRadius: "10px",color:"white", background:"#003088" }}>
            <p>Control, Alerts</p>
            <p>Management</p>
            <p>Clearing</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement contentStyle={{ borderRadius: "10px",color:"white", background:"#003088" }}>
            <p>Clearing</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement contentStyle={{ borderRadius: "10px",color:"white", background:"#003088" }}>
            <p>Leadgering System</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimeLine;
