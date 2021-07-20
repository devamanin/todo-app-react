import React from 'react'

export default function TodoItem(props) {
    return (
        <>
                 <tr key = {()=> { return (new Date().getTime())+props.length['id']}}>
          <th scope="row">{props.todoitem["title"]}</th>
          <td>
            {props.todoitem["description"]}
            <button type="button" className="btn btn-danger float-end" value={props.todoitem['id']} onClick = {(e)=>{props.deletetodo(e, props.todoitem)}}>
              Delete
            </button>
          </td>
        </tr>
        </>
    )
}



// {
//     props.todoitem.todos.map((item) => {
//       return (
//       <>
//         <tr key={item['id']+1}>
//           <th scope="row">{item["title"]}</th>
//           <td>
//             {item["description"]}
//             <button type="button" className="btn btn-danger float-end" value={item['id']} onClick = {(e)=>{props.todoitem.deletetodo(e, item)}}>
//               Delete
//             </button>
//           </td>
//         </tr>
//       </>
//       );
//     })
//     }
