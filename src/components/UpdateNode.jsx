// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import * as Yup from "yup";
import axios from "axios";
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

function UpdateNode(node) {
  const classes = useStyles();
  const [firstName, setFirstName] = useState(node.field_first_name);
  const [lastName, setLastName] = useState(node.field_last_name);
  const [age, setAge] = useState(node.field_age);
  const [marks, setMarks] = useState(node.field_marks);

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
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": "8F_CgR5OdZH9UxHbgrgEGCeIKKYEl8ob2ZKbYK3h3QE",
        Cookie:
          "SESSd62e1bffad2d208e6ae1e4abf6c9ff26=0UALmPrilJoBU0lL5EHKO39rL4xWLY1XfzxFXA96Q9Qhsv0P",
      },
    };

    const data = {
      type: [{ target_id: "new_crudd" }],
      title: [{ value: firstName + " " + lastName }],
      field_first_name: firstName,
      field_last_name: lastName,
      field_age: age,
      field_marks: marks,
      //   field_custom_field: [{ value: 'Custom Field' }],
    };

    axios
      .patch(
        `http://localhost/02-05-2023/new_crudd/web/node/${node.id}?_format=json`,
        data,
        config
      )
      .then((res) => {
        console.log(res.data);
        // handle success
      })
      .catch((err) => {
        console.error(err);
        // handle error
      });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2>Update Node</h2>
      <TextField
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={handleFirstNameChange}
        className={classes.textField}
      />{" "}
      <TextField
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={handleLastNameChange}
        className={classes.textField}
      />{" "}
      <TextField
        label="Age"
        variant="outlined"
        value={age} 
        onChange={handleAgeChange}
        type="number"
        className={classes.textField}
      />{" "}
      <TextField
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
        Update{" "}
      </Button>{" "}
    </form>
  );
}

export default UpdateNode;
