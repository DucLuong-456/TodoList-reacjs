import React, { Fragment } from "react";

const TodoItem = (Props)=>{
    const todo = Props.TodoProps
    const markComplete = Props.markCompleteFunc
    const deteteTodo = Props.deteteTodoFunc
    const todoStyleItem = {
            background: "while",
            padding: '10px',
            borderBottom: "1px #ccc solid",
            textDecoration: todo.completed ? 'line-through': 'none'
    }

    const deleteButtonStyle = {
        background: '#ccc',
        marginLeft: "1000px"
    }
    return (
        <Fragment>
            <p style={todoStyleItem}>
                <input type="checkbox" onChange={markComplete.bind(this,todo.id )} checked={todo.completed}/>
                {todo.title}
                <button style={deleteButtonStyle} onClick={deteteTodo.bind(this,todo.id)}>delete</button>
                </p>
        </Fragment>
    )
}

export default TodoItem

