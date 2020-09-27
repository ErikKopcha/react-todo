import React from 'react';
import propTypes from 'prop-types';
import TodoItem from './TodoItem.js'

const stylesTodo = {
    ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0'
    }
}

function TodoList(props) {
    return (
        <ul style = {stylesTodo.ul}>
            { props.todosArr.map((todo, index) => {
                return (
                <TodoItem
                    todo = {todo}
                    key = {todo.id}
                    index = {index}
                    onChange = {props.onToggle} />
                )
            }) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: propTypes.arrayOf(propTypes.object), //isRequired
    onToggle: propTypes.func // .isRequired
}

export default TodoList;