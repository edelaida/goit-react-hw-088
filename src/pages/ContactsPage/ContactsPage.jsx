import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
//import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { selectLoading } from "../../redux/contacts/selectors";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  //const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <PageTitle>Your tasks</PageTitle>
      <ContactForm />
      <div>{isLoading && "Loading tasks..."}</div>
      {/* {error && <p>{error}</p>} */}
      {/* <SearchBox /> */}
      <ContactList />
    </div>
  );
}

//export default ContactsPage;
