import React from "react";
import TodoItem from './TodoItem'
export default function Todos(props) {
  // JSON.parse(props.todos)
  // console.log(JSON.parse(props.todos)['title']);
  // props.todos.map((item)=>{
  //     console.log(item)
  // })
  // console.log(props.todos)
  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
        {props.todos.map((item)=>{
            return (<TodoItem todoitem = {item} deletetodo = {props.deletetodo} key={(new Date().getTime())+item['id']}/>)
        })}  
          {/* <tr>
      <th scope="row">props.description</th>
      <td>Description 1 <button type="button" className="btn btn-danger float-end">Delete</button></td>
    </tr> */}
        </tbody>
      </table>
    </div>
  );
}
