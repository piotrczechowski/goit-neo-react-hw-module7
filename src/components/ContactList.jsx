import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../redux/contactsSlice";
import { deleteContact } from "../redux/contactOps";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const { loading, error } = useSelector((state) => state.contacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
