import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import s from "./ContactsPages.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPages = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.block}>
      <h1 className={s.teamtitle}>Contacts book</h1>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPages;
