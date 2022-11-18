/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Formik, Form, Field } from "formik";

const ContactWithMap = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">S'inscrire.</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    await sendMessage(500);
                    alert(JSON.stringify(values, null, 2));
                    // show message

                    messageRef.current.innerText =
                      "Your Message has been successfully sent. I will contact you soon.";
                    // Reset the values
                    values.name = "";
                    values.email = "";
                    values.message = "";
                    // clear message
                    setTimeout(() => {
                      messageRef.current.innerText = "";
                    }, 2000);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form">
                      <div className="messages" ref={messageRef}></div>

                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="nom"
                            placeholder="Nom"
                            required="required"
                          />
                        </div>
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="prenom"
                            placeholder="Prenom"
                            required="required"
                          />
                        </div>
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="numero"
                            placeholder="Numero de telephone"
                            required="required"
                          />
                        </div>
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="Ecole"
                            placeholder="Institut/Faculté/Ecole"
                            required="required"
                          />
                        </div>
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="filiere"
                            placeholder="Filiere"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>

                        <button type="submit" className="btn-curve btn-lit">
                          <span>Envoyer</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact.</h4>
                <h3 className="custom-font wow" data-splitting>
                Envoyez-nous un email.
                </h3>
                <div className="item mb-40">
                  <h5>
                    <a href="#0">contact@ensit.rnu.tn</a>
                  </h5>
                  <h5> (+216) 71 399 525</h5>
                </div>
                <h3 className="custom-font wow" data-splitting>
                Rendez nous visite.
                </h3>
                <div className="item">
                  <h6>
                   05, Avenue Taha Hussein Montfleury, 
                    <br />
                    1008 Tunis
                  </h6>
                </div>
                <div className="social mt-50">
                  <a href="https://www.facebook.com/InsightofENSIT" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/insight-of-ensit-connected-world/" className="icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>
              © 2022, ENSIT. Made with passion by 
              <a href="https://abderrahmenlh.com"> &nbsp;Abderrahmen Lahmedi</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;
