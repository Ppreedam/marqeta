import React from "react";
import style from "./MissionStatement.module.css";
import card from "./card3.png"

const MissionStatement = () => {
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
      image:card,
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
    <div className={style.container}>
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
  );
};

export default MissionStatement;
