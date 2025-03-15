// src/App.jsx

import ContactsForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
