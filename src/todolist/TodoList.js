import React from 'react';
import Todo from '../todo/Todo'

const TodoList = ({ list, todoHandler, btnHandler }) => {
    return (
        <div>
            { 
                list.map(element => (
                    <Todo 
                        key={element.id} 
                        singleTodo={element} 
                        todoHandler={todoHandler} 
                        btnHandler={btnHandler}
                    />
                ))
            }
        </div>
    )
}

export default TodoList;