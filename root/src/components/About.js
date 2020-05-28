import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const About = (props) => {
  return (
    <div>
          <h1>
             About
            </h1>
            <h4>
As professors, we have a lot of grad students we mentor. We’d like to help keep them on track, but we can never remember their project deadlines, or when our feedback to them is due. We needed an app that allows us to enter in all the important dates by category (i.e., student project deadline, feedback deadline, letter of recommendation deadline, etc.) and automatically remind us or the students before the deadline. Never miss an opportunity to mentor ever again! 
            </h4>
            <h1>Who We Are</h1>

      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Robert</CardTitle>
          <CardSubtitle>Project Lead</CardSubtitle>
          <CardText>Organizing and Coordinating the work.</CardText>
          <Button>Github</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Amado</CardTitle>
          <CardSubtitle>Marketing</CardSubtitle>
          <CardText>Student laid out the design that matches the example perfectly. CSS fundamentals such as: box model, flexbox, and positioning were used appropriately.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Timothy Ashby</CardTitle>
          <CardSubtitle>Front End (React)</CardSubtitle>
          <CardText>Student created functional components and used events in application to add dynamic functionality to app. </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Mosharaf</CardTitle>
          <CardSubtitle>Front End (State Management)</CardSubtitle>
          <CardText>Student has implemented a state management system that makes sense for the project. It is organized well and implemented correctly. State is not lost as user goes through the application. </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Luis Abellan</CardTitle>
          <CardSubtitle>Back End</CardSubtitle>
          <CardText>Student built and deployed a Web API following the REST architectural pattern with code that is clean and organized using the Express Framework. Student can demonstrate that a portion of the APIs were contributed individually.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
