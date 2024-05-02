// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contacts/operations";
// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList";
import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  //const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.contacts.isLoading);
  // const error = useSelector((state) => state.contacts.error);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      {/* <section>
        <h1>Phonebook</h1>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        <ContactForm />
        <SearchBox />
        <ContactList />
      </section> */}
    </div>
  );
};

export default Layout;
