import React, { useState } from 'react';
import './App.css';

import Member from "./components/Member";
import AddMember from "./components/AddMember";
import data from "./data";

function App() {
  const [members, setMembers] = useState(data);
  const addNewMember = member => {
    setMembers([...members, member]);
  }
  return (
    <div className="App">
      <h1>Team Form</h1>
      <AddMember addNewMember={addNewMember} />
      <Member memberList={members} />
    </div>
  );
}

export default App;
