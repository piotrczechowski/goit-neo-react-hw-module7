import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <div className={styles.contactName}>
          <span>{contact.name}</span>
        </div>
        <div className={styles.contactNumber}>
          <span>{contact.number}</span>
        </div>
      </div>
      <button className={styles.contactDeleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
