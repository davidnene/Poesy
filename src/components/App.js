import React, { useEffect, useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {

  const [poems, setPoems] = useState([])
  const [showForm, setShowForm] = useState(false)
  
  useEffect(()=>{
    fetch("http://localhost:8004/poems")
    .then(res => res.json())
    .then(poem =>setPoems(poem))
  },[])
  function handleClick() {
    setShowForm(!showForm)
  }

  function handleUpdatePoems(newPoem) {
      setPoems([...poems, newPoem])
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleClick}>Show/hide new poem form</button>
        {showForm ? <NewPoemForm onUpdatePoems ={handleUpdatePoems}/> : null}
      </div>
      <PoemsContainer poems={poems}/>
    </div>
  );
}

export default App;
