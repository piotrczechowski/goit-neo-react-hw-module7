import PropTypes from "prop-types";
import Contact from "./Contact";
import styles from "./ContactForm.module.css";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
