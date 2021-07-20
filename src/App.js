import Header from './components/Header'
import Todo from './components/Todo'
import Todos from './components/Todos'
import {useState, useEffect} from 'react'

function App() {
  let initTodo;
  if (localStorage.getItem('todoItem')===null){
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todoItem'))
    // console.log(initTodo)
  }
  let [todoItem, setItem] = useState(initTodo)
  // if (JSON.parse(localStorage.getItem('todoItem')).length!==0){
  //   setItem(JSON.parse(localStorage.getItem('todoItem')))
  // }
  let addTodo = (e, title, description) =>{
    e.preventDefault()
    setItem([...todoItem, {
      id: todoItem.length+1,
      title: title,
      description: description
    }])
  }
  useEffect(()=>{
    localStorage.setItem('todoItem', JSON.stringify(todoItem))
  }, [todoItem])
  let deleteTodo = (e, todo) =>{
    e.preventDefault()
    // setItem(todoItem.filter((item)=>{
    //   if (item['id']!==todo['id']){
    //   return (item)
    //   }
    //   return ""
    // }))
    // setItem(todoItem1)
    setItem(todoItem.filter((item)=>{
      return item!==todo
    }))
  }
  return (
  <>
  <Header />
  <Todo  addtodo = {addTodo}/>
  <hr />
  <Todos todos = {todoItem} key={todoItem.length+1} deletetodo = {deleteTodo} />
  </>
  );
}
export default App;