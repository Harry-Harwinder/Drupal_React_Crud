// eslint-disable-next-line no-unused-vars
import React from "react";
import CreateForm from "./components/CreateForm";
import DisplayNode from "./components/DisplayNode";
import {Routes,Route,  } from "react-router-dom";
import UpdateNode from "./components/UpdateNode";

import "./App.css";
function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<CreateForm />} />
        <Route path="/display" element={<DisplayNode />} />
        <Route path="/update" element={<UpdateNode />} />
      </Routes>
    </>
  );
}
export default App;
