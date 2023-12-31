
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom"
import ContactCard from "./ContactCard";
const ContactList = (props) => {
    console.log(props);
    const inputE1 = useRef("")
    const deleteConactHandler = (id) => {
        props.getContactId(id);
    };
    // const contacts = [{
    //     id: "1",
    //     name: "swapnil",
    //     email: "scheerl@gmail.com",
    // },
    // {
    //     id: "2",
    //     name: "Moni",
    //     email: "moni@gmail.com",
    // },
    // ];
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHander={deleteConactHandler}
                key={contact.id} />


        );
    });
    const getSearchTerm = () => {
        // console.log(inputE1.current.value)
        props.searchKeyword(inputE1.current.valueOf)
    }
    return (
        <div className="main">
            <h2>
                Contact List

            </h2>
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        ref={inputE1} type="text" placeholder="seARCH CONTACT" className="prompt" value={props.term} onChange={getSearchTerm} />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">{renderContactList}</div>
        </div >


    );
}

export default ContactList;
