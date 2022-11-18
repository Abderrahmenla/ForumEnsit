/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> contact@ensit.rnu.tn
                  </li>
                  <li>
                    <span>Address : </span>05, Avenue Taha Hussein Montfleury, 1008 Tunis
                  </li>
                  <li>
                    <span>Phone : </span> (+216) 71 399 525
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Suivez-nous</h6>
                <div className="social">
                  <a target="_blank" href="https://www.facebook.com/InsightofENSIT" className="icon" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/company/insight-of-ensit-connected-world/" className="icon" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a target="_blank" href="https://www.youtube.com/@rachedgharbi6604" className="icon" rel="noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newsletter</h6>
              <p>Sign up for subscribe out newsletter!</p>
              <Formik
                initialValues={{
                  subscribe: "",
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">Subscribe</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            © 2022, ENSIT. Made with passion by
            <a href="http://abderrahmenlh.com"> Abderrahmen Lahmedi</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
