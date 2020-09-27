import React, {useContext} from 'react';
import propTypes from 'prop-types';
import Context from '../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context);
    const classes = [];

    if (todo.completed === true) {
        classes.push('done');
    }

    return (
        <li style = {styles.li}>
            <span className={classes.join(' ')}>
                <input
                    checked={todo.completed}
                    style = {styles.input}
                    onChange={() => {
                        onChange(todo.id);
                    }}
                    type="checkbox"/>
                <strong>{index + 1}. </strong>
                {todo.title}
            </span>

            <button onClick={() => removeTodo(todo.id)} className="rm">&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todos: propTypes.object, // .isRequired
    index: propTypes.number,
    onChange: propTypes.func // .isRequired
}

export default TodoItem;