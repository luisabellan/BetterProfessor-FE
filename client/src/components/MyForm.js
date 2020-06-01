import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { Col, Row, Button, Form, FormGroup, Label, Input, Alert, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "./navigation_MosharrafMusa/Navigation";


const formSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Must be a valid email address").required("Must include email address"),
    password: yup.string().required("Must include password"),
    terms: yup.boolean().oneOf([true],"Please agree to terms of use")
})


export default function MyForm (){
    //Set State of Users to display
    const [users, setUsers] = useState([])
    //Set Form State
    const[formState, setFormState]=useState({
        id:Date.now(),
        name:"",
        email:"",
        password:"",
        terms: false
    });

    const[errorState, setErrorState]=useState({
        id:Date.now(),
        name:"",
        email:"",
        password:"",
        terms: ""
    });
    //Yup Validation
    const validate = e =>{
        let value = e.target.type==="checkbox"? e.target.checked:e.target.value;
        yup.reach(formSchema, e.target.name)
        .validate(value)
        .then(valid=>{
            setErrorState({
                ...errorState, [e.target.name]: ""    
            });
        })
        .catch(err=>{
            setErrorState({
                ...errorState,[e.target.name]:err.errors[0]
            });
        });
        };
    //Event Handler
    const changeHandler = (e)=>{
        e.persist();
        validate(e);
        let value = e.target.type ==="checkbox"? e.target.checked:e.target.value;
        setFormState({
            ...formState,[e.target.name]:value
        })
    }

    const formSubmit = e =>{
        e.preventDefault();
        console.log("form submitted!");
        axios.post("https://reqres.in/api/users", formState)
        .then(response => setUsers([
            //Changed response from console.log to instead go through Users
            ...users,
            formState
        ]))
        .catch(error => console.log(error))
        setFormState({
            name: '',
            email: '',
            password: '',
            terms: false

        })
    }
        console.log(users);
    //Map Through Users and display. Form
    return (
        <div id="formContainer">
             <Navigation />
             <br></br>
             {users.map(person => {
                return <div>
                    <Alert color="info">
                    <h2>Review Posted</h2>
                    </Alert>
                    <div id="onboardedUsers">
                    <Card className="ReviewCard">
                         <CardBody className="ReviewCardBody">
                             <CardTitle>Name: {person.name}</CardTitle>
                             <CardSubtitle>Email: {person.email}</CardSubtitle>
                                <CardText>Review: {person.password}</CardText>
                        <Button color="alert"><Link to="/students">Click to View Your Due Projects</Link></Button>
                     </CardBody>
                      </Card>

        
                    </div>
                    <br></br>
                    
                </div>
            })}
        <Form onSubmit={formSubmit}
        >
            <Label htmlFor="name"><span className="fieldTitle">Name:</span>
            <Input className="TimFormInput" id="name" type="text" name="name" placeholder="Please enter name" value={formState.name}
                onChange={changeHandler} />
                {errorState.name.length>0?(
                <p className="error">{errorState.name}</p>
            ) :null}
             </Label>
            <br></br>
            <br></br>
            <Label htmlFor="email"><span className="fieldTitle">Email:</span>
            <Input className="TimFormInput" id="email" type="text" name="email" placeholder="Please enter email" value={formState.email} onChange={changeHandler} />
            {errorState.email.length>0?(
                <p className="error">{errorState.email}</p>
            ) :null}
            </Label>
            <br></br>
            <br></br>
            <Label htmlFor="password"><span className="fieldTitle">Review:</span>
            <Input className="TimFormInput" id="password" type="textarea" name="password" placeholder="Please write your review here..." value={formState.password}
                onChange={changeHandler} />
                {errorState.password.length>0?(
                <p className="error">{errorState.password}</p>
            ) :null}
            </Label>
            <br></br>
            <br></br>
            <Label htmlFor="terms"><span className="fieldTitle">Terms of Service:</span><br></br>
            <Input id="terms" type="checkbox" name="terms" checked={formState.terms} onChange={changeHandler} />
            <br></br>
            {errorState.terms.length>0?(
                <p className = "error">{errorState.terms}</p>
            ): null}
            </Label>
            <br></br>
            <Button type="submit">Submit:</Button>
        </Form>


        {console.log(formState)}
       </div>
    )

}