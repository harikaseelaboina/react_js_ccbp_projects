import React from "react";
import { Component } from "react";
import ContactCard from "./ContactCard";


// class ContactList extends Component{
//     render(){
//         return(

//         )
//     }
// }

const ContactList = (props) => {
    const { contacts } = props

    const displayContactList = props.contacts.map((i) => {
        return (
            <ContactCard contact={i} />
        )
    })

    return (
        <div className="container3">
            <h2 className="head3">Contact List</h2>
            {displayContactList}
        </div>

    )
}

export default ContactList;


// These are the new changes from the new_branch