import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import style from "./TimeLine.module.css";
const TimeLine = () => {
  const timeline_style = {
    borderRadius: "10px",
    color: "white",
    background: "#003088",
    textAlign: "center",
    fontSize: "30px",
  };
  const iconStyle = {
    background: "#003088",
    color: "red",
  };
  return (
    // main box
    <div className={style.mainContainer}>
      <div className={style.container}>
        <VerticalTimeline className={style.containerBox} lineColor={"#003088"}>
          <VerticalTimelineElement
            iconStyle={iconStyle}
            contentArrowStyle={{ background: "#003088" }}
            contentStyle={timeline_style}
            className={style.cardManagementOption}
          >
            <p>Card</p>
            <p>Managament</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={iconStyle}
            contentArrowStyle={{ background: "#003088" }}
            contentStyle={timeline_style}
            className={style.cardManagementOption}
          >
            <p>Virtual / Physical</p>
            <p>Card Embossing</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={iconStyle}
            contentArrowStyle={{ background: "#003088" }}
            contentStyle={timeline_style}
            className={style.cardManagementOption}
          >
            <p>Start Using The</p>
            <p>Card</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={iconStyle}
            contentArrowStyle={{ background: "#003088" }}
            contentStyle={timeline_style}
            className={style.cardManagementOption}
          >
            <p>Authorization</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={iconStyle}
            contentArrowStyle={{ background: "#003088" }}
            contentStyle={timeline_style}
            className={style.cardManagementOption}
          >
            <p>Control, Alerts</p>
            <p>Management</p>
            <p>Clearing</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={iconStyle}
            contentArrowStyle={{ background: "#003088" }}
            contentStyle={timeline_style}
            className={style.cardManagementOption}
          >
            <p>Clearing</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={iconStyle}
            contentArrowStyle={{ background: "#003088" }}
            contentStyle={timeline_style}
            className={style.cardManagementOption}
          >
            <p>Leadgering System</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimeLine;
