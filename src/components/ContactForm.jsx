import React from "react";
import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContactForm({ onAddContact }) {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters maximum")
      .required("Required"),
    number: Yup.string()
      .min(9, "Must be minimum 9 digits")
      .max(12, "Must be maximum 12 digits")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <div className={styles.contactFormContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="name" className={styles.contactFormLabel}>
            Name
          </label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            className={styles.contactFormField}
          />
          <ErrorMessage
            name="name"
            component="div"
            className={styles.errorText}
          />

          <label htmlFor="number" className={styles.contactFormLabel}>
            Number
          </label>
          <Field
            type="text"
            id="number"
            name="number"
            placeholder="Enter phone number"
            className={styles.contactFormField}
          />
          {/* Make sure this error message references "number" */}
          <ErrorMessage
            name="number"
            component="div"
            className={styles.errorText}
          />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
