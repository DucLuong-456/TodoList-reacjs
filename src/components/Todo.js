import React, { Fragment, useState } from "react";
import TodoItem from "./todoItem";
import AddTodo from "./AddTodo"
import { v4 as uuidv4 } from 'uuid';

const Todos =()=>{
    const [todosState,setTodoState] = useState([{
        id: uuidv4(),
        title: "việc 1",
        completed: false
    },
    {
        id: uuidv4(),
        title: "việc 2",
        completed: false
    },
    {
        id: uuidv4(),
        title: "việc 3",
        completed: false
    }])

    const markCompleted = (id)=>{
        const newTodos = todosState.map((todo)=>{
                if(todo.id === id) todo.completed = !todo.completed
                return todo
        }) 
        setTodoState(newTodos)
    }

    const deteteTodo = (id)=>{
        const newTodos = todosState.filter((todo)=>{
            return todo.id !== id
        })
        setTodoState(newTodos)
    }

    const addTodo = (newTitle)=>{
        const newTodos = [...todosState,{
            id: uuidv4(),
            title: newTitle,
            completed: false
        }]
        setTodoState(newTodos)
    }
    return (
        <Fragment>
            <AddTodo addTodoFunc={addTodo}/>
            {
                todosState.map(todo=>{
                    return <TodoItem key={todo.id}
                     TodoProps= {todo}
                    markCompleteFunc ={markCompleted}
                    deteteTodoFunc ={deteteTodo}
                    />
                })
            }
            
            
        </Fragment>
    )
}

export default Todos