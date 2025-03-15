import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || number.trim() === "") return;
    const newContact = { id: Date.now().toString(), name, number };
    dispatch(addContact(newContact));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Phone Number"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactsForm;
