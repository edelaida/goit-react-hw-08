import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import s from "./ContactForm.module.css";

const FORM_INITIAL = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const finalUser = { ...values, id: nanoid() };
    dispatch(addContact(finalUser));
    actions.resetForm();
  };

  return (
    <Formik initialValues={FORM_INITIAL} onSubmit={handleSubmit}>
      <Form className={s.phoneblok}>
        <h2 className={s.cont}>Add new contact</h2>
        <label>
          <span className={s.text}>Name : </span>
          <br />
          <Field className={s.ifield} type="text" name="name" />
        </label>
        <br />
        <label>
          <span className={s.text}>Telephone : </span>
          <br />
          <Field className={s.ifield} type="text" name="number" />
        </label>
        <br />
        <button className={s.btnn} type="submit">
          ▶ Create new contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
