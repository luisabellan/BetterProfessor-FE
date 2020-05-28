import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Robert from './images/Robert.jpg';
import Amado from './images/Amado.jpg';
import Tim from './images/Tim.jpg';
import Mosharraf from './images/Mosharraf.jpg';
import Luis from './images/Luis.jpg';

const About = (props) => {
  return (
    <div>
          <h1>
             About
            </h1>
            <h6>
As professors, we have a lot of grad students we mentor. We’d like to help keep them on track, but we can never remember their project deadlines, or when our feedback to them is due. We needed an app that allows us to enter in all the important dates by category (i.e., student project deadline, feedback deadline, letter of recommendation deadline, etc.) and automatically remind us or the students before the deadline. Never miss an opportunity to mentor ever again! 
            </h6>
            <h1>Who We Are</h1>
    <div className="bioDiv">
      <Card className="bioCard">
        <CardImg top width="100%" src={Robert} alt="Robert Avatar" />
        <CardBody>
          <CardTitle>Robert Gordon</CardTitle>
          <CardSubtitle>Project Lead</CardSubtitle>
          <CardText>Organizing and Coordinating the work.</CardText>
          <Button>Github</Button>
        </CardBody>
      </Card>
      <Card className="bioCard">
        <CardImg top width="100%" src={Amado} alt="Amado Avatar" />
        <CardBody>
          <CardTitle>Amado Guerrero</CardTitle>
          <CardSubtitle>Marketing</CardSubtitle>
          <CardText>Student laid out the design that matches the example perfectly. CSS fundamentals such as: box model, flexbox, and positioning were used appropriately.</CardText>
          <Button>Github</Button>
        </CardBody>
      </Card>
      <Card className="bioCard">
        <CardImg top width="100%" src={Tim} alt="Tim Avatar" />
        <CardBody>
          <CardTitle>Timothy Ashby</CardTitle>
          <CardSubtitle>Front End (React)</CardSubtitle>
          <CardText>Student created functional components and used events in application to add dynamic functionality to app. </CardText>
          <Button>Github</Button>
        </CardBody>
      </Card>
      <Card className="bioCard">
        <CardImg top width="100%" src={Mosharraf} alt="Mosh Avatar" />
        <CardBody>
          <CardTitle>Mosharraf Musa</CardTitle>
          <CardSubtitle>Front End (State Management)</CardSubtitle>
          <CardText>Student has implemented a state management system that makes sense for the project. It is organized well and implemented correctly. State is not lost as user goes through the application. </CardText>
          <Button>Github</Button>
        </CardBody>
      </Card>
      <Card className="bioCard">
        <CardImg top width="100%" src={Luis} alt="Luis Avatar" />
        <CardBody>
          <CardTitle>Luis Abellan</CardTitle>
          <CardSubtitle>Back End</CardSubtitle>
          <CardText>Student built and deployed a Web API following the REST architectural pattern with code that is clean and organized using the Express Framework. Student can demonstrate that a portion of the APIs were contributed individually.</CardText>
          <Button>Github</Button>
        </CardBody>
      </Card>
      </div>
    </div>
  );
};

export default About;
