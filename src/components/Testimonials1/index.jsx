/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import removeOverlay from "../../common/removeOverlay";

class Testimonials1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div
          onClick={() => this.slider.slickNext()}
          className="next cursor-pointer"
        >
          <span className="pe-7s-angle-right"></span>
        </div>
        <div
          onClick={() => this.slider.slickPrev()}
          className="prev cursor-pointer"
        >
          <span className="pe-7s-angle-left"></span>
        </div>
      </div>
    );
  };
  componentDidMount() {
    removeOverlay();
  }
  render() {
    return (
      <section
        className={`testimonials section-padding ${
          this.props.withBG ? "bg-img" : ""
        } ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${
          this.props.parallaxie ? " parallaxie" : ""
        } ${!this.props.overlay ? "noOverlay" : ""}`}
        style={{
          backgroundImage: `${
            this.props.withBG && !this.props.imgSrc
              ? "url(/img/slid/3.jpg)"
              : this.props.imgSrc
              ? `url(${this.props.imgSrc})`
              : "none"
          }`,
        }}
        data-overlay-dark={`${this.props.overlay ? "9" : "0"}`}
      >
        <div className="container position-re">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              Découvrez Nos
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
              Conférenciers
              </h3>
            </Split>
            <span className="tbg">Conférenciers</span>
          </div>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-8">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: true,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }}
              >
                <div className="item">
                  <p>
                  responsable des projets de recherche et de développement chez MaibornWolff
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/2.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                              Alexander Hofmann 
                              </h6>
                              <span className="author-details">
                              CTO at MaibornWolff and Holger Wolff
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/2.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                            Alexander Hofmann 
                            </h6>
                            <span className="author-details">
                            CTO at MaibornWolff and Holger Wolff
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                  Vaste expérience dans le secteur automobile, dans les aspects commerciaux et techniques, avec une solide formation en génie mécanique.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/1.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                THORSTEN KÖRNER
                              </h6>
                              <span className="author-details">
                                Responsable des ventes Bosch Rexroth AG
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/1.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              THORSTEN KÖRNER
                            </h6>
                            <span className="author-details">
                              Responsable des ventes Bosch Rexroth AG
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                  un expert international en éducation, e-gouvernance et innovation numérique. Il est membre de plusieurs associations et notamment <br/>du Groupe iMFV travaillant sur le développement de la Vision Future de la Mobilité Intelligente
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/3.jpg" alt="farouk kamoun" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Farouk Kamoun
                              </h6>
                              <span className="author-details">
                                animateur a mosaique fm
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/3.jpg" alt="kamoun" />
                            </div>
                            <h6 className="author-name custom-font">
                              Farouk Kamoun
                            </h6>
                            <span className="author-details">
                              Professeur et expert international en politique stratégies
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                  Ingénieur en électronique et télécommunications intéressé par tout <br/> ce qui concerne l'Internet des objets, l'intelligence artificielle et le développement informatique
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/4.jpg" alt="Fatma gargouri" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Fatma Gargouri
                              </h6>
                              <span className="author-details">
                                CTO chez Smart Ways Innovation
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/4.jpg" alt="Fatma gargouri" />
                            </div>
                            <h6 className="author-name custom-font">
                              Fatma Gargouri
                            </h6>
                            <span className="author-details">
                              CTO chez Smart Ways Innovation
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                  Présentateur TV, Radio, Modérateur, Producteur et Voix Officielle
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/5.jpg" alt="Malek ouni" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Malek Ouni
                              </h6>
                              <span className="author-details">
                                Animateur à mosaique fm
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/5.jpg" alt="Malek ouni" />
                            </div>
                            <h6 className="author-name custom-font">
                              Malek Ouni
                            </h6>
                            <span className="author-details">
                              Animateur à mosaique fm
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default Testimonials1;
