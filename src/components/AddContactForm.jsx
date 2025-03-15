import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/contactOps";
import styles from "./SearchBox.module.css";

const AddContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { loading } = useSelector((state) => state.contacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) return;

    const newContact = { name, number };
    dispatch(addContact(newContact));
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.searchBoxContainer} onSubmit={handleSubmit}>
      <input
        className={styles.searchBoxInput}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
      <input
        className={styles.searchBoxInput}
        type="text"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        Add Contact
      </button>
    </form>
  );
};

export default AddContactForm;
