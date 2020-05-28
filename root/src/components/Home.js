import React from "react";
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeImg from './images/HomeImg.jpeg'
import { Jumbotron } from 'reactstrap';


const Home = (props) => {
    return (
      <div>
            <Jumbotron>
                
        <h1 className="display-3">Never miss another deadline again!</h1>
        <img src={HomeImg} height="400px"></img>
        <p className="lead">Better Professor is an easy-to-use deadline management app that allows you to set custom reminders for yourself and your students.</p>
        <hr className="my-2" />
        <p>Click below to get started!</p>
        <p className="lead">
        <Button color="info"><Link to="/form">Sign Up</Link></Button>{' '}
        </p>
      </Jumbotron>
            
        </div>
    )
}

export default Home;