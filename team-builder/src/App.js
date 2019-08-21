import React, { useState } from 'react';
import ReactDom from "react-dom";
import './App.css';

import Form from "./components/Form";
import TeamForm from "./components/TeamForm";
import data from "./data";

function App() {
  const [form, setForm] = useState(data);
  const addNewForm = form => {
    setForm([...form, form]);
  }
  return (
    <div className="App">
      <h1>Team Form</h1>
      <TeamForm addNewForm={addNewForm} />
      <Form formList={form} />
    </div>
  );
}

export default App;
