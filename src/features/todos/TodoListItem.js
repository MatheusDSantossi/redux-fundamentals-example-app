import React from 'react'

const selectTodoById = (state, todoId) => {
    return state.todos.find(todo => todo.id === todoId)
}

// Destructure `props.id`, since we only need the ID value
// const TodoListItem = ({ id }) => {
//     // call our `selectTodoById` with the state _and_ the ID value

// }

const TodoListItem = () => {
  return (
    <div>
      
    </div>
  )
}

export default TodoListItem
