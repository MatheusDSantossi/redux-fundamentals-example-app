import { client } from '../../api/client'

const initialState = []
// const initialState = [
//   { id: 0, text: 'Learn React', completed: true },
//   { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
//   { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
// ]

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todosLoaded': {
      // Replace the existing state entirely by returning the new value
      return action.payload
    }
    case 'todos/todoAdded': {
      // Can return just the new todos array - no extra object around it
      // return [
      //   ...state,
      //   {
      //     id: nextTodoId(state),
      //     text: action.payload,
      //     completed: false,
      //   },
      // ]

      // Return a new todos state array with the new todo item at the end
      return [...state, action.payload]
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    default:
      return state
  }
}

// Thunk function
export async function fetchTodos(dispatch, getState) {
  const response = await client.get('/fakeApi/todos')

  const stateBefore = getState()
  console.log('Todos before dispatch: ', stateBefore)

  dispatch({ type: 'todos/todosLoaded', payload: response.todos })

  const stateAfter = getState()
  console.log('Todos after dispatch: ', stateAfter)
}

// async function saveNewTodo(dispatch, getState) {
//   // ❌ We need to have the text of the new todo, but where is it coming from??
//   const initialTodo = { text }
//   const response = await client.post('/fakeApi/todos', { todo: initialTodo })
//   dispatch({ type: 'todos/todoAdded', payload: response.todo })
// }

// ---- Write a synchronous outer function that receives the `text` parameter:
export function saveNewTodo(text) {
  // And then creates and returns the async thunk function:
  return async function saveNewTodoThunk(dispatch, getState) {
    // Now we can us ethe text value and send it to the server
    const initialTodo = { text }
    const response = await client.post('/fakeApi/todos', { tod: initialTodo })
    dispatch({ type: 'todos/todoAdded', payload: response.todo })
  }
}
