import React from "react";
import Poem from "./Poem";

function PoemsContainer({ poems }) {
  return (
    <div className="poems-container">
      {poems.map(poem => 
        <Poem title = {poem.title} content = {poem.content} author = {poem.author} key = {poem.id}/>)}
    </div>
  );
}

export default PoemsContainer;
