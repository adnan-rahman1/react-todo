import React from 'react';


const AddTodo = ({ addTodoHanlder }) => {
    return (
        <div>
            <form 
                method="POST" 
                onSubmit={e => {
                    e.preventDefault();
                    addTodoHanlder(e.target.addtodo.value);
                }}
            >
            <input
                type="text"
                name="addtodo"
                placeholder="Add todo"
            />
            <button type="submit">add</button>
            </form>
        </div>
    )
}

export default AddTodo;