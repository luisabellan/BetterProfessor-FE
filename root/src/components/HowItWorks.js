import React from "react";
import MyForm from './MyForm.js';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function HowItWorks() {
    return (
        <div> 
            <h5>Simply Sign Up! After that; you'll able to view and post your projects!</h5>
            <Button color="info"><Link to="/form" className="homeButton">Sign Up</Link></Button>{' '}
        </div>
    )
}