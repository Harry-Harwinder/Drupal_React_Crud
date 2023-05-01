// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayNode() {
  const [nodeData, setNodeData] = useState([]);

  useEffect(() => {
    const config = {
      "Content-Type": "application/json",
      "X-CSRF-Token": "5JGUd1OHjR3TyVUOC5rZuawcCxInVwUq3-xW8l_SpdQ",
      Cookie:
        "SESSd62e1bffad2d208e6ae1e4abf6c9ff26=0UALmPrilJoBU0lL5EHKO39rL4xWLY1XfzxFXA96Q9Qhsv0P",
    };
    axios
      .get(
        "http://localhost/24-04-2023/crud_operation/web/all-cruddoperationpage-data?_format=json",
        config
      )
      .then((res) => setNodeData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
        {nodeData.map((node) => {
          return (
            <tr key={node.nid}>
              <td>{node.nid}</td>
              <td>{node.title}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default DisplayNode;
