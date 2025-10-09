import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './api/server'
import store from './store'
import { Provider } from 'react-redux'

// log the initial state
console.log('Initial state: ', store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

// TEST 5 - UI

// END UI TEST 5
// TEST 4
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// END TEST 4

// TEST 3
// store.dispatch({ type: 'todo/todoAdded', payload: 'Learn about actions' })
// // log: "Hi!"

// console.log('State after dispatch: ', store.getState())
// // log { todos: [...], filters: { status, colors }, meaningOfLife: 42 }
// END TEST 3

// test 2

// console.log('Dispatching action')
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// console.log('Dispatch complete')

// End test 2

// Now, dispatch some actions (test 1)
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })

// store.dispatch({ type: 'todos/todoToggled', payload: 0 })
// store.dispatch({ type: 'todos/todoToggled', payload: 1 })

// store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })

// store.dispatch({
//   type: 'filters/colorFilterChanged',
//   payload: { color: 'red', changeType: 'added' },
// })

// // Stop listening to state updates
// unsubscribe()

// // Dispatch one more action to see what happens
// store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })

ReactDOM.render(
  // Render a `<Provider>` around the entire `<App>, and pass the Redux store to it as a prop`
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
