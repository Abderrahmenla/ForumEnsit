/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";
import Image from "next/image";
import CountDown from "../CountDown";



const AboutUs2 = ({ skillsTheme }) => {
  const cpStyle = {
    path: {
      stroke: "#75dab4",
    },
    trail: {
      stroke: skillsTheme
        ? skillsTheme == "dark"
          ? "#0f1218"
          : "#e5e5e5"
        : "",
    },
    text: {
      fill: skillsTheme ? (skillsTheme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-title">
                <h6>À propos</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting
                >
                  8éme èditions de Insight Of ENSIT: Connected World
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
              Nous vivons dans un monde de plus en plus connecté. Les gens sont constamment connectés à Internet et les uns aux autres via les smartphones et autres appareils. Un coup d'œil à la smartwatch révèle le nombre de pas que l'on fait ou la quantité d'électricité produite par les cellules solaires du toit. Il suffit d'un clic pour lancer la Machine à laver à la maison lorsque vous n'êtes pas chez vous.
Ce ne sont que trois exemples parmi tant d'autres qui sont déjà une réalité aujourd'hui.
              </p>
              <p className="mt-10 wow fadeInUp" data-wow-delay=".4s">
              Dans un ménage moyen, 50 appareils sont déjà connectés à l'internet, et la tendance est à la hausse. Le monde connecté prend des formes de plus en plus concrètes dans les foyers privés ainsi que dans l'industrie, le commerce et la science.
              </p>
              <Split>
                <Link href="/a-propos">
                  <a
                    className="words chars splitting simple-btn custom-font mt-30 wow"
                    data-splitting
                  >
                    <span>Savoir plus</span>
                  </a>
                </Link>
              </Split>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <Image placeholder="blur" src="/img/intro/3.jpg" alt="ensit" width={602} height={402}/>
              </div>
              <div className="skills-circle wow fadeInUp" data-wow-delay=".8">
              {/* <Countdown date={Date.now() + 10000} /> */}
              <CountDown 
		timeTillDate="11 23 2022, 8:00 am" 
		timeFormat="MM DD YYYY, h:mm a" 
	/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
