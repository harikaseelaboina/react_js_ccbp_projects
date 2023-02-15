import React from "react"
import { Component } from "react"


const ContactCard = (props) => {
    const { name, email } = props.contact
    return (
        <div className="box">
            <div>
                <p> {name}  </p>
                <p>{email}</p>
            </div>
            <i className="icon" type="button">X</i>
        </div>
    )

}

export default ContactCard