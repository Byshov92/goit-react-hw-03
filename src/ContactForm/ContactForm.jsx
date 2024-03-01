import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must be at most 50 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values }; // Генеруємо ідентифікатор за допомогою nanoid
    onAddContact(newContact);
    resetForm();
  };

  return (
    <div className={css.wr}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.wrapper}>
          <h1 className={css.title}>Phonebook</h1>
          <div className={css.wrapp}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <Field className={css.input} type="text" id="name" name="name" />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="div"
            />
            <label className={css.label} htmlFor="number">
              Number
            </label>
            <Field
              className={css.input}
              type="text"
              id="number"
              name="number"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="div"
            />
          </div>
          <button className={css.btn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
