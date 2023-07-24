
import { BrowserRouter, Routes, Route } from "react-router-dom"; import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";



function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
  const addContactHandler = (contact) => { // uuid
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContactHandler = (id) => {  // remove function
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("retrieveContacts")
    console.log(retrieveContacts); // Check the retrieved value
    console.log(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("retrieveContacts") // Check the raw value from localStorage
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => { // local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path="/contact" element={<ContactDetail />} />

        </Routes>

        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </BrowserRouter>


    </div>
  );
}

export default App;
