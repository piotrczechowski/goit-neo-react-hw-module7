import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || number.trim() === "") {
      setError("Both name and number are required.");
      return;
    }
    setError("");
    const newContact = { id: Date.now().toString(), name, number };
    dispatch(addContact(newContact));
    setName("");
    setNumber("");
  };

  return (
    <div className={styles.contactFormContainer}>
      <form onSubmit={handleSubmit}>
        <label className={styles.contactFormLabel} htmlFor="name">
          Name:
        </label>
        <input
          className={styles.contactFormField}
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <label className={styles.contactFormLabel} htmlFor="number">
          Phone Number:
        </label>
        <input
          className={styles.contactFormField}
          id="number"
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Phone Number"
        />
        {error && <p className={styles.errorText}>{error}</p>}
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactsForm;
