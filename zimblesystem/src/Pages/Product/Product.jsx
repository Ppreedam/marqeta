import React from "react";
import style from "./Product.module.css";
import card from "../Home/card3.png";
import differentiator from "./differentiator.png";

const Product = () => {
  const differentiators = [
    {
      image: card,
      title: "Modern Technology Stack",
      content:
        "A highly flexible platform that’s built on a robust architecture - with technology that has the ability to swiftly deploy solutions.",
    },
    {
      image: card,
      title: "Modern Technology Stack",
      content:
        "A highly flexible platform that’s built on a robust architecture - with technology that has the ability to swiftly deploy solutions.",
    },
    {
      image: card,
      title: "Modern Technology Stack",
      content:
        "A highly flexible platform that’s built on a robust architecture - with technology that has the ability to swiftly deploy solutions.",
    },
    {
      image: card,
      title: "Modern Technology Stack",
      content:
        "A highly flexible platform that’s built on a robust architecture - with technology that has the ability to swiftly deploy solutions.",
    },
    {
      image: card,
      title: "Modern Technology Stack",
      content:
        "A highly flexible platform that’s built on a robust architecture - with technology that has the ability to swiftly deploy solutions.",
    },
    {
      image: card,
      title: "Modern Technology Stack",
      content:
        "A highly flexible platform that’s built on a robust architecture - with technology that has the ability to swiftly deploy solutions.",
    },
  ];
  return (
    <div className={style.productContainer}>
      {/* shankar part */}
      <div></div>
      {/* rabi part */}
      <div className={style.differentiatorSection}>
        <div className={style.howWeDo}>
          <div className={style.hifen}></div>
          <div className={style.differentiatorSectionTag}>How we do it</div>
        </div>
        <h2 className={style.differentiatorHeading}>
          Zymblesystem Differentiators That{" "}
          <span className={style.differentiatorHeadingSpan}>
            Put You In The Game.
          </span>
        </h2>
        <p className={style.differentiatorPara}>
          ZymbelSystem takes{" "}
          <span className={style.differentiatorParastyle}>
            a consultative approach that’s scalable, available and agile in
            solutions.
          </span>{" "}
          With modern, innovative technology that’s elastic, programmatically
          scalable, Cloud-Ready and agile with zero downtime and a global
          servicing model supporting you 24/7/365.
        </p>
        <div className={style.techStack}>
          <div className={style.techStackLeft}>
            {differentiators.map((e) => (
              <div className={style.techStackMenu}>
                <img
                  alt="image"
                  className={style.techStackMenuImage}
                  src={e.image}
                />
                <h3 className={style.techStackMenuTitle}>{e.title}</h3>
                <p className={style.techStackMenuContent}>{e.content}</p>
              </div>
            ))}
          </div>
          <div className={style.techStackRight}>
            <img
              className={style.techStackRightIage}
              src={differentiator}
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* vishal par}t */}
      <div></div>
    </div>
  );
};

export default Product;
