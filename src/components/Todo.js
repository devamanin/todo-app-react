import React, {useState, useRef} from "react";

import './todo.css'
export default function Todo(props) {
  const titlein = useRef(null)
  const descriptionin = useRef(null)
    let [title, setTitle] = useState("")
    let [description, setDesc] = useState("")
    let addTodoBut = (e) =>{
        e.preventDefault();
        if (title === "" || description === ""){
          titlein.current.style.borderColor = "red";
          descriptionin.current.style.borderColor = "red";
        }
        else{
            props.addtodo(e, title, description);
            setTitle("")
            titlein.current.style.borderColor = "#ced4da"
            setDesc("")
            descriptionin.current.style.borderColor = "#ced4da"
        }
    }
  return (
    <div className="container my-3">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className = "form-control"
            aria-describedby="emailHelp"
            value={title}
            onChange = {(e)=>{setTitle(e.target.value)}}
            required
            ref={titlein}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange = {(e)=>{setDesc(e.target.value)}}
            style = {{height:'120px', resize:'none'}}
            required
            ref={descriptionin}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e)=>{addTodoBut(e)}}>
          Add Todo
        </button>
      </form>
    </div>
  );
}

