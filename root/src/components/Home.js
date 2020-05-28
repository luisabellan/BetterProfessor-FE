import React from "react";
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function Home() {
    return (
        <div> 
            <Button color="primary"><Link to="/form">Sign Up</Link></Button>{' '}
            <Button color="info"><Link to="/form">Log In</Link></Button>{' '}
        </div>
    )
}