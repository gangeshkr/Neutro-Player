import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import backgroundImg from "../../assets/image/signUp.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const {t} = useTranslation()
  const handleSignUp = (values: any, resetForm: any, setSubmitting: any) => {};

  const Schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
    appName: Yup.string().required("Required"),
    terms: Yup.string().required("Required"),
    updates: Yup.string().required("Required"),

  });

  return (
          <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sign-up">
        <div className="p-5 mt-auto">
          <div className="sign-up-header">
            <p>{t('loginHeader')}</p>
          </div>

          <div className="para mt-auto">
            <p>{t('loginHeaderMessage')}</p>
          </div>

          <div>
            <img src={backgroundImg} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="p-3 justify">
          <p>
            <strong>{t('disclaimer')}:</strong> {t('disclaimerText')}
          </p>
        </div>
      </div>

      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="p-5 mt-auto">
          <h4 className="headers">Sign Up</h4>
          <p className="regular-para label-color mt-4">
            Kindly fill in your details to be part of the Rebranded
          </p>
          <div className="">
            <Formik
              validationSchema={Schema}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                handleSignUp(values, resetForm, setSubmitting);
              }}
              initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                appName: "",
                terms: "",
                updates: "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                errors,
                isSubmitting,
                touched,
              }: any) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Field
                    name="email"
                    className="custom-form-input"
                    placeholder="Email"
                  />
                  {errors.email ? (
                    <div className="errTxt">{errors.email}</div>
                  ) : null}
                  <Field
                    name="password"
                    className="custom-form-input"
                    placeholder="Password"
                  />
                  {errors.password ? (
                    <div className="errTxt">{errors.password}</div>
                  ) : null}
                  <Field
                    name="confirmPassword"
                    className="custom-form-input"
                    placeholder="Confirm Password"
                  />
                  {errors.confirmPassword ? (
                    <div className="errTxt">{errors.confirmPassword}</div>
                  ) : null}
                  <Field
                    name="appName"
                    className="custom-form-input"
                    placeholder="Enter Your App Name"
                  />
                  {errors.appName ? (
                    <div className="errTxt">{errors.appName}</div>
                  ) : null}

                  <div className="d-flex flex-column mb-5">
                    <label>
                      <Field
                        type="checkbox"
                        name="terms"
                        value="terms"
                        className="checkbox"
                      />
                      I agree with our terms and conditions
                    </label>
                    {errors.terms ? (
                    <div className="errTxt">{errors.terms}</div>
                      ) : null}
                    <label>
                      <Field
                        type="checkbox"
                        name="updates"
                        value="updates"
                        className="checkbox"
                      />
                      Subscribe for New update news
                    </label>
                    {errors.updates ? (
                    <div className="errTxt">{errors.updates}</div>
                      ) : null}
                  </div>

                  <ReCAPTCHA sitekey="Your client site key" />

                  <div className="mt-5">
                    <button className="primary-btn" type="submit" style={{width:'100%'}}>
                      Sign Up
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            <div className="mt-5 text-center">
              <p>
                Already have an account?{" "}
                <NavLink to="/" className="txt">
                  sign In
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
