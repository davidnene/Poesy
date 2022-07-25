import React, { useState } from "react";

function NewPoemForm( {onUpdatePoems} ) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [masterPiece, setMasterpiece] = useState("")
  
  const formData = {
   "title": title,
    "author": author,
    "content": masterPiece
  }
  

  function handleChangeTitle(e) {
    setTitle(e.target.value)
  }

  function handleChangeAuthor(e) {
    setAuthor(e.target.value)
  }

  function handleChangeMasterpiece(e) {
    setMasterpiece(e.target.value)
  }
  console.log(title)

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:8004/poems", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newPoem => onUpdatePoems(newPoem))
    setTitle("")
    setAuthor("")
    setMasterpiece("")
  }
  return (
    <form className="new-poem-form" onSubmit={handleSubmit} >
      <input onChange={handleChangeTitle} placeholder="Title" value={title} />
      <input onChange={handleChangeAuthor} placeholder="Author" value={author} />
      <textarea onChange={handleChangeMasterpiece} placeholder="Write your masterpiece here..." rows={10} value={masterPiece} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
