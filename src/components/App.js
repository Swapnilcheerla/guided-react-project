
import { BrowserRouter, Routes, Route } from "react-router-dom"; import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import api from "../api/contact"
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";



function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //Retrive
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    console.log("response.data");
    console.log(response.data);
    return response.data;

  };


  const addContactHandler = async (contact) => { // uuid
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact
    }
    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
  };


  const updateContactHandler = async (contact) => {
    const response = await api.put(`contacts/${contact.id}`, contact);
    // console.log(response.data);
    const { id, name, email } = response.data;
    setContacts(contacts.map(contact => {
      return contact.id === id ? { ...response.data } : contact;
    }))

  };


  const removeContactHandler = async (id) => {  // remove function
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(ContactDetail).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    }
    else {
      setSearchResults(contacts);
    }

  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);

    };
    getAllContacts();

    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log("retrieveContacts")
    // console.log(retrieveContacts); // Check the retrieved value
    // console.log(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log("retrieveContacts") // Check the raw value from localStorage
    // if (retrieveContacts) {
    //   setContacts(retrieveContacts);
    // }
  }, []);

  useEffect(() => { // local storage
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/" element={<ContactList contacts={searchTerm.length < 1 ? contacts : searchResults} getContactId={removeContactHandler} />}
            term={searchTerm}
            serachKeyword={searchHandler} />
          <Route path="/contact" element={<ContactDetail />} />
          <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler} />} />


        </Routes>

        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </BrowserRouter>


    </div>
  );
}

export default App;
