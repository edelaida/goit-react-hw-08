import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ user }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(user.id));
  };
  return (
    <li>
      <p>
        🙎 {user.name}
        📞 {user.number}
      </p>
      <button type="button" onClick={() => handleDelete(user.id)}>
        DELETE
      </button>
    </li>
  );
};

export default Contact;
