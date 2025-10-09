import { useSelector } from 'react-redux'

const selectTodos = (state) => state.todos

const TodoList = () => {
  const todosIds = useSelector(selectTodosIds)

  // since `todos` is an array, we can loop over it
  const renderedListItems = todosIds.map((todoId) => {
    return <TodoListItems key={todoId} todo={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
