import React, { useState } from "react";
import Hearder from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import './App.css';

function App() {
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact])
  }

  // const contacts=[{id:1,"name":"harika","email":"harika.krishna99@gmail.com"},
  // {id:2,"name":"deepu","email":"deepu@gmail.com"},
  // {id:3,"name":"krish","email":"krish@gmail.com"}]
  return (
    <div>
      <Hearder />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
