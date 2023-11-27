import React, { Fragment, useState } from "react";

const AddTodo = (Props)=>{
    const [title,setTitle] = useState('')
    const addTodo = Props.addTodoFunc

    const addTodoFormStyle ={
        display: 'flex'
    }
    const addTodoInputStyle ={
        flex: "10",
        padding: "5px"
    }
    const deleteButtonStyle = {
        background: '#ccc',
    }

    const changeTitle =(event)=>{
        setTitle(event.target.value)
    }

    const addTodoItem = (event)=>{
            event.preventDefault()
            if(title !== ''){
                addTodo(title)
                setTitle('')   
            }
    }
    return (
        <Fragment>
            <form style={addTodoFormStyle} onSubmit={addTodoItem}>
                <input type="text" placeholder="Nhập thông tin" style={addTodoInputStyle} value={title} onChange={changeTitle}/>
                <input type="submit" value="Thêm" style={deleteButtonStyle}/>
            </form>
        </Fragment>
    )
}

export default AddTodo

