import React from 'react';



const s_todoStyle = (isTodoFinished) => {
    return {
        color: isTodoFinished ? "green" : "red",
        textDecoration: isTodoFinished ? "line-through" : "none",
    }
}
const Todo = ({ singleTodo }) => {
    return (
        <p>
            <input 
                onChange={e => console.log(!singleTodo.finished)} 
                value={singleTodo.id} 
                type="checkbox" 
                name="my_checkbox" 
            />
            <span style={s_todoStyle(singleTodo.finished)}>{ singleTodo.title }</span>
        </p>
    )
}

export default Todo;