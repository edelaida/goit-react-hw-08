import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();

  const handleDelete = (userId) => {
    dispatch(deleteContact(userId));
  };
  const filteredArray = useSelector(selectFilteredContacts);
  return (
    <div>
      <h3>ContactList</h3>
      <ul>
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
