import React from 'react';
import Todo from '../todo/Todo'

const TodoList = ({ list }) => {
    return (
        <div>
            { 
                list.map(element => (
                    <Todo key={element.id} singleTodo={element} />
                ))
            }
        </div>
    )
}

export default TodoList;