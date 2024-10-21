import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import s from "../ContactForm/ContactForm.module.css";

const Contact = ({ user }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(user.id));
  };
  return (
    <li className={s.item}>
      <p className={s.text}>🙎 {user.name}</p>
      <p className={s.text}>📞 {user.number}</p>
      <button
        className={s.btnn}
        type="button"
        onClick={() => handleDelete(user.id)}
      >
        DELETE
      </button>
    </li>
  );
};

export default Contact;
