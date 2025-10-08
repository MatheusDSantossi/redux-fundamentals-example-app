import { createStore } from 'redux'
import rootReducer from './reducer'
import { sayHiOnDispatch } from "./exampleAddons/enhancers"

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  }
}

const store = createStore(rootReducer, undefined, sayHiOnDispatch)

export default store
