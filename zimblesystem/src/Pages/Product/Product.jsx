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
      <div className={style.gold_standard_box}>
        <div className={style.gold_standard_first_box}>
          <div>
            <h1>
              <span style={{ color: "black" }}>The</span> Gold Standard of{" "}
              <br /> Modern Issuer Processing
            </h1>
            <p>
              The Gold Standard of Modern Issuer ProcessingCoreCard is a global
              modern issuer processor with end-to-end solutions across credit,
              prepaid, and debit that are digital-first, API centric, and
              architected to enable fast implementations. Our client roster
              boasts some of the industry’s leading financial institutions,
              fintech companies, card issuers, and more, all poised at the
              forefront of technology and product innovation.
            </p>
            <a href="">
              <p>CoreCard Corporation (NYSE: CCRD)</p>
            </a>
            <button className={style.gold_standard_first_box_contactus_button}>
              Contact Us
            </button>
          </div>
          <div>
            <img
              style={{ height: "500px", width: "600px" }}
              src="https://s3-alpha-sig.figma.com/img/5577/ef41/11012cb502b8f8933c13ec8502aeac0e?Expires=1685923200&Signature=fQdON2fFvfP3~sT0HFslnAIHwHHHywPtFui2sAGqK45RFm4Kwdhx0PNJJWbiSXrBEGCawcP~QpqfZocv4M3DdiMIASG1YNH~qs8T7AEAJps1qNu-q74JFo6w-grWK6FcaYAPsoeDRXdhz61PLcc8nx-KhohXDsQVt~d93RFxBhtTw2sRmVQ2pskMPMtuFWQxZ7YBVcnvOiTynvZcG53ykBK5yM4VxxSR-C92zuRZ4h7119gwLQmCLdyZ1uuHbSLM5NdCxKq4I7hCXcGZ9mbuE5ZLjbsWv9FW1cj79xaE1TsHJdAMrCkJE8pGZAaMXU7GvS7Sg7mRZzVq5gUIFUC06w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="the gold standard image"
            />
          </div>
        </div>
        {/* 2nd box section */}
        <div className={style.gold_standard_second_box}>
          <div>
            <img
              style={{ height: "500px", width: "700px" }}
              src="https://s3-alpha-sig.figma.com/img/c38f/e19e/dd3fbbcc3eb8e16fafebcd46545f8b56?Expires=1685923200&Signature=qbacU1LPiHh~Elo-E5Sn0PDS1Qvufm6wz6qcNHq6AX6oa98scH1DfNDu0c7CtmEXe4BQ8P5VsZpNMVKOK5zJ7ujYFFQ1AsAZSKhKk8zffLmXlequDXxrjQOFHoFFYNbmkLadkcz7VaYO6c9VO~dBm2sxIAxcfq99T9DW7dzqgnC0jg64wKK8FXN3mtcu~nS4wC99PPDS~86sqGnze1Axy45CtgpfDBsazyjUFNgrWwkmf0-j2z9aMf3WnOaQOdXLKP5CS7SiHWxnZcECmC8IyYBYdL3m~PaWOmBk0ifl0TTuc-eKxjSF2MDLhicA4yJzX8z1Sg~BfQ3V1~qHnYmnEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="the gold 2nd standard image"
            />
          </div>
          <div>
            <p style={{ fontSize: "20px" }}>
              {" "}
              <b>About ZymbleSystem</b>{" "}
            </p>
            <h1>
              {" "}
              <span style={{ color: "#303881" }}>Your Partner To</span> The{" "}
              <br /> Zymblesystem
            </h1>
            <p style={{ fontSize: "25px", marginTop: "20px" }}>
              {" "}
              <b>Consultative.Innovative.Customizable.</b>{" "}
            </p>
            <div
              style={{ border: "2px solid red", width: "74%", margin: "auto" }}
            >
              <p className={style.evolving_global}>
                In the evolving global financial services industry, we
                understand your complex and changing requirements inside-out.
                Only then do we create, run and manage the{" "}
                <span style={{ color: "#f56514" }}>
                  optimal card solution for you.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
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
