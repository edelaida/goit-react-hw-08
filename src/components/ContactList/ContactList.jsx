import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operations";
import s from "../ContactForm/ContactForm.module.css";

const ContactList = () => {
  const dispatch = useDispatch();

  const handleDelete = (userId) => {
    dispatch(deleteContact(userId));
  };
  const filteredArray = useSelector(selectFilteredContacts);
  return (
    <div>
      <h3 className={s.cont}>ContactList</h3>
      <ul className={s.phoneblok}>
        {Array.isArray(filteredArray) &&
          filteredArray.map((user) => {
            return (
              <Contact key={user.id} user={user} handleDelete={handleDelete} />
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;
