import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactOps";
import ContactList from "./components/ContactList";
import AddContactForm from "./components/AddContactForm";
import Filter from "./components/Filter";
import styles from "./app.module.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Contact Book</h1>
      <AddContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
