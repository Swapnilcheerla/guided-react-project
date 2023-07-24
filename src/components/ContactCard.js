import React from "react";
import { Link } from 'react-router-dom';
import learn from '../images/learn.jpeg'
const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    // console.log("************ ppros:", props)
    return (
        <div className="item">
            <img className="ui avatar image" src={learn} alt="learn" />
            <div className="content">
                <Link to={{ pathname: '/contact' }} state={{ data: props.contact }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red" }}
                onClick={() => props.clickHander(id)}
            ></i>
        </div>
    );
};

export default ContactCard;