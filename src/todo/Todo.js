import React from 'react';

const s_todoStyle = (isTodoFinished) => {
    return {
        color: isTodoFinished ? "green" : "red",
        textDecoration: isTodoFinished ? "line-through" : "none",
    }
}
const Todo = ({ singleTodo, todoHandler, btnHandler }) => {
    return (
        <p>
            <input 
                onChange={e => todoHandler(singleTodo.id)} 
                type="checkbox" 
                name="my_checkbox" 
            />
            <span style={s_todoStyle(singleTodo.finished)}>{ singleTodo.title }</span>&nbsp;
            <button onClick={e => btnHandler(singleTodo.id)}>x</button>
        </p>
    )
}

export default Todo;