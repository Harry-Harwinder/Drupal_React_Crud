// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function DisplayNode() {
  const [nodeData, setNodeData] = useState([]);
  const navigate = useNavigate();
  const handleUpdate = () =>{
    navigate("/update");
  }

  const handleDelete = (nid) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": "8F_CgR5OdZH9UxHbgrgEGCeIKKYEl8ob2ZKbYK3h3QE",
        Cookie:
          "SESSd62e1bffad2d208e6ae1e4abf6c9ff26=0UALmPrilJoBU0lL5EHKO39rL4xWLY1XfzxFXA96Q9Qhsv0P",
      },
    };
    axios
      .delete(
        `http://localhost/02-05-2023/new_crudd/web/node/${nid}?_format=json`,
        config
      )
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        // After successful delete, fetch updated data from server
        axios
          .get(
            "http://localhost/02-05-2023/new_crudd/web/all-newcrudd-data?_format=json",
            config
          )
          .then((res) => setNodeData(res.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    const config = {
      "Content-Type": "application/json",
      "X-CSRF-Token": "8F_CgR5OdZH9UxHbgrgEGCeIKKYEl8ob2ZKbYK3h3QE",
      Cookie:
        "SESSd62e1bffad2d208e6ae1e4abf6c9ff26=0UALmPrilJoBU0lL5EHKO39rL4xWLY1XfzxFXA96Q9Qhsv0P",
    };
    axios
      .get(
        "http://localhost/02-05-2023/new_crudd/web/all-newcrudd-data?_format=json",
        config
      )
      .then((res) => setNodeData(res.data))
      
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Display Data</h2>
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Marks</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {nodeData.map((node) => {
              return (
                <tr key={node.nid}>
                  <td>{node.nid}</td>
                  <td>{node.field_first_name}</td>
                  <td>{node.field_last_name}</td>
                  <td>{node.field_age}</td>
                  <td>{node.field_marks}</td>
                  <td><button style={{color: 'red'}} onClick={() => handleDelete(node.nid)}>Delete</button></td>
                  <td><button style={{color: 'blue'}} onClick={() => handleUpdate(node.nid)}>Update</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DisplayNode;
