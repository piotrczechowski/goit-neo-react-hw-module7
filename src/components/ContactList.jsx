import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../redux/contactsSlice";
import { deleteContact } from "../redux/contactOps";
import styles from "./ContactForm.module.css";

import { FaUser, FaPhone, FaTrashAlt } from "react-icons/fa";
const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const { loading, error } = useSelector((state) => state.contacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.errorText}>Error: {error}</p>;

  return (
    <div className={styles.contacFormContainer}>
      <ul className={styles.contactList}>
        {filteredContacts.map((contact) => (
          <li className={styles.contactItem} key={contact.id}>
            {" "}
            <div className={styles.contactInfo}>
              <FaUser className={styles.icon} />
              <span className={styles.contactName}>{contact.name}:</span>{" "}
              <FaPhone className={styles.icon} />
              <span className={styles.contactNumber}>{contact.number}</span>
              <button
                className={styles.contactDeleteButton}
                onClick={() => handleDelete(contact.id)}
              >
                <FaTrashAlt className={styles.icon} />
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
