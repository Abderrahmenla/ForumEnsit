/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

const Services3 = () => {
  return (
    <section className="services section-padding sub-bg">
      <div className="container">
        <div className="sec-head custom-font tr-head">
          <h6>Découvrez Nos</h6>
          <h3>Départements.</h3>
          <span className="tbg">Départements</span>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop">
              <span className="icon pe-7s-gleam"></span>
              <h6>Génie Civil</h6>
              <p>
              Le département de génie civil de l’ENSIT forme des ingénieurs concepteurs et constructeurs.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <span className="icon pe-7s-phone"></span>
              <h6>Génie Informatique</h6>
              <p>
              Une formation bien basée et étroitement liée aux nouvelles technologies.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <span className="icon pe-7s-magic-wand"></span>
              <h6>Génie mecanique </h6>
              <p>
              Cadre enseignant hautement qualifié et diversifié, couvrant tous les domaines de la Mécanique.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
            <div className="step-item xtop">
              <span className="icon pe-7s-gleam"></span>
              <h6>GMAM</h6>
              <p>
              Le Génie Mathématiques Appliquées et Modélisation est à la croisée de la science des données, des statistiques, de l'intelligence artificielle, de la modélisation mathématique et de l’ingénierie numérique.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".7s">
            <div className="step-item xcolor">
              <span className="icon pe-7s-phone"></span>
              <h6>Génie Industriel</h6>
              <p>
              La formation englobe la conception, l’amélioration et l’installation des systèmes integres.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="1s">
            <div className="step-item xbottom">
              <span className="icon pe-7s-magic-wand"></span>
              <h6>Génie électrique</h6>
              <p>
              Former des ingénieurs capables de s’appuyer sur leurs compétences scientifiques et techniques pour résoudre des problèmes d'ingénierie complexes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
