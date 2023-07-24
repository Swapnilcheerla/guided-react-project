import React from "react";
import { useLocation } from "react-router-dom";

import { Link } from 'react-router-dom';
import learn from '../images/learn.jpeg'
import ContactList from "./ContactList";
const ContactDetails = (props) => {
    const location = useLocation();
    const { name, email, id } = location.state?.data
    console.log("********* props at details", location.state?.data)
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={learn} alt="learn" />

                </div>
                <div className="content">
                    <div className="header">{name}

                    </div>
                    <div className="description">{email}</div>

                </div>


            </div>
            <div className="centered-div">
                <Link to="/">
                    <button className="ui button blue center"> bank to contack list</button>

                </Link>

            </div>
        </div>

    );
};

export default ContactDetails;