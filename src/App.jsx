import React, { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  // Load from localStorage if available, otherwise use initialContacts
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState("");

  // Save contacts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Add a new contact (avoid duplicates by name)
  const addContact = (newContact) => {
    const duplicate = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (duplicate) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts([...contacts, { ...newContact, id: nanoid() }]);
  };

  // Delete a contact by id
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  // Handle search filter changes
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter contacts by name (case-insensitive)
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="appContainer">
      <h1 className="appTitle">Phonebook</h1>

      <ContactForm onAddContact={addContact} />

      <SearchBox filter={filter} onChange={handleFilterChange} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
