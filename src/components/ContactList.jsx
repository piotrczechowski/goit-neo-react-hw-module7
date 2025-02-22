import styles from "./Contact.module.css";
import Contact from "./Contact";

function ContactList({ contacts, onDeleteContact }) {
  <div className={styles.contactListContainer}>
    {contacts.map((contact) => (
      <Contact
        key={contact.id}
        contact={contact}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </div>;
}

export default ContactList;
