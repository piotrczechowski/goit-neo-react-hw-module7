import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";
// Import desired icons from react-icons
import { FaUser, FaPhone, FaTrashAlt } from "react-icons/fa";

function Contact({ contact, onDeleteContact }) {
  return (
    <div className={styles.contactItem}>
      {/* Contact info (name + phone number) */}
      <div className={styles.contactInfo}>
        <div className={styles.contactName}>
          <FaUser className={styles.icon} />
          {contact.name}
        </div>
        <div className={styles.contactNumber}>
          <FaPhone className={styles.icon} />
          {contact.number}
        </div>
      </div>

      <button
        className={styles.contactDeleteButton}
        onClick={() => onDeleteContact(contact.id)}
      >
        <FaTrashAlt /> Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
