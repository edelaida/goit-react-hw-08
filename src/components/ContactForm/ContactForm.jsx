import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

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
      <Form>
        <h2>Add new user</h2>
        <label>
          <span>Name : </span>
          <br />
          <Field type="text" name="name" />
        </label>
        <br />
        <label>
          <span>Telephone : </span>
          <br />
          <Field type="text" name="number" />
        </label>
        <br />
        <button type="submit">▶ Create new user</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
