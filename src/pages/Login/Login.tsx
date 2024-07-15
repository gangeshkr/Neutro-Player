import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import backgroundImg from "../../assets/image/signUp.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Login = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleSignUp = (values: any, resetForm: any, setSubmitting: any) => {
    navigate("/signUp");
  };

  const Schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").optional(),
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

        <div className="p-5 justify">
          <p>
            <strong>{t('disclaimer')}:</strong> 
            {t('disclaimerText')}
          </p>
        </div>
      </div>

      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="p-5 mt-5">
          <h4 className="headers">{t('welcome')}</h4>
          <p className="regular-para label-color mt-4">
            {t('credsText')}
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
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                  <Field
                    name="password"
                    className="custom-form-input"
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}

                  <div className="text-end mt-3">
                    <p>
                      <NavLink to="/reset-password" className="txt">
                        {t('forgot')}
                      </NavLink>
                    </p>
                  </div>

                  <div className="mt-5">
                    <button
                      className="primary-btn"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      {t('logIn')}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            <div className="mt-5 text-center">
              <p>
                {t('signUp')}{" "}
                <NavLink className="txt" to="/signUp">
                  {t('signU')}
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
