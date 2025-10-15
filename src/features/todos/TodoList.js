import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'

import { selectFilteredTodoIds } from './todosSlice'

const selectTodosIds = (state) => state.todos.map((todo) => todo.id)

const TodoList = () => {
  const todosIds = useSelector(selectFilteredTodoIds)
  const loadingStatus = useSelector((state) => state.todos.status)

  if (loadingStatus === 'loading') {
    return (
      <div className="todo-list">
        <div className="loader" />
      </div>
    )
  }

  // since `todos` is an array, we can loop over it
  const renderedListItems = todosIds.map((todoId) => {
    return <TodoListItem key={todoId} todo={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
