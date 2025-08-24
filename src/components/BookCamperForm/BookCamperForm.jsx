import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";

import css from "./BookCamperForm.module.css";

Modal.setAppElement("#root");

const bookCamperFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  bookingDate: Yup.array()
    .of(Yup.date().nullable())
    .test(
      "range",
      "Booking period is required",
      (value) => {
        return value && value[0] && value[1];
      }
    ),
  comment: Yup.string(),
});

const BookCamperForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState([
    null,
    null,
  ]);

  const initialValues = {
    name: "",
    email: "",
    bookingDate: [null, null],
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    setModalIsOpen(true);
    actions.resetForm();
    setSelectedDates([null, null]);
  };

  return (
    <div className={css.formWrap}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={bookCamperFormSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={css.form}>
            <label className={css.label}>
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Name*"
              />
              <ErrorMessage
                component="div"
                className={css.error}
                name="name"
              />
            </label>

            <label className={css.label}>
              <Field
                className={css.input}
                type="email"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage
                component="div"
                className={css.error}
                name="email"
              />
            </label>

            <label className={css.label}>
              <DatePicker
                selectsRange
                startDate={values.bookingDate[0]}
                endDate={values.bookingDate[1]}
                onChange={(dates) => {
                  setFieldValue("bookingDate", dates);
                  setSelectedDates(dates);
                }}
                dateFormat="dd/MM/yyyy"
                placeholderText="Booking date*"
                calendarStartDay={1}
                customInput={
                  <input className={css.input} />
                }
                minDate={new Date()}
              />
              <ErrorMessage
                component="div"
                className={css.error}
                name="bookingDate"
              />
            </label>

            <label className={css.label}>
              <Field
                className={`${css.input} ${css.textarea}`}
                as="textarea"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage
                component="div"
                className={css.error}
                name="comment"
              />
            </label>

            <button className={css.button} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Booking Confirmation"
        className={css.modal}
        overlayClassName={css.modalOverlay}
      >
        <h2>Thank you for your booking!</h2>
        {selectedDates[0] && selectedDates[1] && (
          <p>
            Your booking period:{" "}
            {selectedDates[0].toLocaleDateString()} –{" "}
            {selectedDates[1].toLocaleDateString()}
          </p>
        )}
        <p>
          We’ve received your request and will contact you
          shortly. Get ready for your campervan adventure!
        </p>
        <button
          className={css.button}
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default BookCamperForm;
