import { ChangeEvent, useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import FeedbackModal from "../../molecules/feedback-modal/view";
import InputMask from "react-input-mask";
import * as Yup from "yup";

import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form as FormikForm,
  Field,
} from "formik";

import "./styles.scss";

export interface ContactProps {
  sendSubscribe: any;
  contactData: any;
}

const Contact: React.FC<ContactProps> = ({ sendSubscribe, contactData }) => {
  const [t, i18n] = useTranslation();
  const { title, text } = contactData.content[i18n.language];
  const { phones } = contactData;
  const [formSentError, setFormSentError] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const initialValues: any = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const ContactSchem = Yup.object().shape({
    name: Yup.string()
      .min(10, t("contact.validation.toShort"))
      .required(t("contact.validation.required")),
    phone: Yup.string().required(t("contact.validation.required")),
    message: Yup.string()
      .required(t("contact.validation.required"))
      .min(20, t("contact.validation.toShort")),
    email: Yup.string()
      .email(t("contact.validation.invalidEmail"))
      .required(t("contact.validation.required")),
  });

  const submitFormData = async (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => {
    setFormSentError(false);
    console.log(values);
    // const res = await sendSubscribe(values);
    // if (res) {
    //   formikHelpers.resetForm();
    //   setFeedbackMessage(t("contact.sendSucess"));
    // } else {
    //   setFormSentError(true);
    // }
  };

  return (
    <section id="Contact" className="Contact">
      <Container className="Contact-wrapper">
        <Row>
          <Col md={6} sm={12}>
            <h2>{title}</h2>
            <div className="call" dangerouslySetInnerHTML={{ __html: text }} />
            <div className="mb-4">
              {phones?.length && (
                <div className="phone-numbers">
                  {phones.map((phone: any, index: number) => (
                    <p key={index}>
                      <a
                        href={`tel:${phone.number}`}
                      >{`${phone.state} ${phone.number}`}</a>
                    </p>
                  ))}
                </div>
              )}
            </div>
          </Col>
          <Col md={6} sm={12}>
            <Formik
              initialValues={initialValues}
              validationSchema={ContactSchem}
              onSubmit={submitFormData}
            >
              {({
                values,
                errors,
                touched,
                setFieldValue,
                isSubmitting,
              }: FormikProps<any>) => (
                <FormikForm className="principal-fields">
                  <Row>
                    <Col md={12} sm={12}>
                      <Field
                        name="name"
                        id="name"
                        type="text"
                        value={values.name}
                        onChange={(e: ChangeEvent<{ value: string }>) =>
                          setFieldValue("name", e.target.value)
                        }
                        placeholder={t("contact.placeHolderName")}
                        component={Form.Control}
                      />
                      {errors.name && touched.name ? (
                        <small>{errors.name}</small>
                      ) : (
                        <small />
                      )}
                    </Col>
                    <Col md={12} sm={12}>
                      <Field
                        name="email"
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={(e: ChangeEvent<{ value: string }>) =>
                          setFieldValue("email", e.target.value)
                        }
                        placeholder={t("contact.placeHolderEmail")}
                        component={Form.Control}
                      />
                      {errors.email && touched.email ? (
                        <small>{errors.email}</small>
                      ) : (
                        <small />
                      )}
                    </Col>
                    <Col md={12} sm={12}>
                      <Field name="phone">
                        {() => (
                          <InputMask
                            id="phone"
                            type="phone"
                            value={values.phone}
                            onChange={(e: ChangeEvent<{ value: string }>) =>
                              setFieldValue("phone", e.target.value)
                            }
                            placeholder={t("contact.placeHolderPhone")}
                            mask="(99) 9999-9999"
                          />
                        )}
                      </Field>
                      {errors.phone && touched.phone ? (
                        <small>{errors.phone}</small>
                      ) : (
                        <small />
                      )}
                    </Col>
                    <Col md={12} sm={12}>
                      <Field name="message">
                        {() => (
                          <Form.Control
                            id="message"
                            as="textarea"
                            rows={6}
                            onChange={(e: ChangeEvent<{ value: string }>) =>
                              setFieldValue("message", e.target.value)
                            }
                            value={values.message}
                            placeholder={t("contact.placeHolderMessage")}
                          />
                        )}
                      </Field>
                      {errors.message && touched.message ? (
                        <small>{errors.message}</small>
                      ) : (
                        <small />
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="text-right">
                        <Button
                          disabled={isSubmitting}
                          variant="success"
                          type="submit"
                        >
                          {t("contact.send")}
                        </Button>
                      </div>
                    </Col>
                  </Row>

                  {formSentError && (
                    <div className="text-center">
                      <small>{t("contact.sentError")}</small>
                    </div>
                  )}
                </FormikForm>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
      <FeedbackModal
        title="Subscribe"
        message={feedbackMessage}
        handleClose={() => setFeedbackMessage("")}
      />
    </section>
  );
};

export default Contact;
