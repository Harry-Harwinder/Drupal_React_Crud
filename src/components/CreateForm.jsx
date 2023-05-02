// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import {Buffer} from 'buffer';

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
  textField: {
    margin: theme.spacing(1),
    width: "60ch",
  },
  button: {
    margin: theme.spacing(2),
    width: "15ch",
    height: "5ch",
    fontSize: "20px",
  },
}));

// const schema = Yup.object().shape({
//   firstName: Yup.string().required("First name is required"),
//   lastName: Yup.string().required("Last name is required"),
//   age: Yup.number().positive().integer().required(),
//   marks: Yup.number().positive().integer().required(),
// });

function App() {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate("/display");
  };
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [marks, setMarks] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleMarksChange = (event) => {
    setMarks(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const nodeData = {
      type: [
        {
          target_id: "new_crudd",
        },
      ],
      
      title: [
        {
          value: firstName + " " + lastName,
        },
      ],
      field_first_name: [
        {
          value: firstName,
        },
      ],
      field_last_name: [
        {
          value: lastName,
        },
      ],
      field_age: [
        {
          value: age,
        },
      ],
      field_marks: [
        {
          value: marks,
        },
      ],
    };
    // test comment
    let data = JSON.stringify(nodeData);
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost/02-05-2023/new_crudd/web/node?_format=json',
      headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-CSRF-Token": "8F_CgR5OdZH9UxHbgrgEGCeIKKYEl8ob2ZKbYK3h3QE",
          'Cookie': 'SESSd62e1bffad2d208e6ae1e4abf6c9ff26=0UALmPrilJoBU0lL5EHKO39rL4xWLY1XfzxFXA96Q9Qhsv0P',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDE0NDJjYjIxODc2ZmJjZDZlNGE5ZTQiLCJpYXQiOjE2NzkwNDk0MzV9._92uXiaOwmXRUQPbGJ80lUXs5XT40O7KVxLGuxnnwHM', 
        },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      navigate("/display");

      console.log(JSON.stringify(response.data),'HELLO');
    })
    .catch((error) => {
      console.log('error',error);
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        id="firstName"
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={handleFirstNameChange}
        className={classes.textField}
      />{" "}
      <TextField
        id="lastName"
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={handleLastNameChange}
        className={classes.textField}
      />{" "}
      <TextField
        id="age"
        label="Age"
        variant="outlined"
        value={age}
        onChange={handleAgeChange}
        type="number"
        className={classes.textField}
      />{" "}
      <TextField
        id="marks"
        label="Marks"
        variant="outlined"
        value={marks}
        onChange={handleMarksChange}
        type="number"
        className={classes.textField}
      />{" "}
      <Button
        variant="contained"
        type="submit"
        color="primary"
        className={classes.button}
      >
        Submit{" "}
      </Button>{" "}
    </form>
  );
}

export default App;
