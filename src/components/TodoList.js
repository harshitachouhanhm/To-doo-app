import React, { useState } from 'react'
import './TodoList.css';

function TodoList() {
const [inputValue,setInputValue] = useState([""])    
    const [todos,setTodos] = useState([])
    function handleInputChange(event){
        setInputValue(event.target.value)
        // console.log(event.target.value)
    }
    const handleAddToDos=()=>{
      if(inputValue !==""){
        const newTodo = {        // item of list like (game , code... is reprentaing by this obj)
            id: Date.now(),      // give a time stemp (date obj)
            text : inputValue,
            completed : false,
        }
        // console.log(newTodo)
        setTodos([...todos,newTodo])
        // console.log(todos)
      }
    }
    const handleToggleChange=(id)=>{
        console.log(id)
        const updatedTodos = todos.map((todo)=>{
            if(todo.id ===id){                         //
                return{...todo,completed: !todo.completed}
            }
            return todo
        })
        setTodos(updatedTodos)
        // console.log(updatedTodos)
    }
    const handleRemoveTodo = ((id)=>{
          const filteredTodos = todos.filter((todo)=> todo.id !== id)
          console.log(filteredTodos)
          setTodos(filteredTodos)
    })
   return(
    <div className='todo-input'>
      <div className=" Todo-container">
       <h1 style={{fontFamily: "Monospace"}}>LineUP</h1>
       <div>
       <input type="text" value={inputValue} placeholder='Enter Your Task' 
       onChange={handleInputChange}/>
       <button onClick={handleAddToDos}>Add</button>
       </div>

       <ul className='Todo-list'> 
        {todos.map((todo)=>(
            <li className={`todo-item ${todo.completed == true ? "completed" :"" }`}> 
                <input type="checkBox" onChange={()=>handleToggleChange(todo.id)}/>
                <span className='todo-text'>{todo.text}</span>
                <button onClick={()=>handleRemoveTodo(todo.id)}>Remove</button>
            </li>

        ))}

        

         
         
       </ul>
      </div>
    </div>
  );
}


export default TodoList
