import React from 'react'
import { applyMiddleware, compose, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import rootReducer from './reducer'
import {
  sayHiOnDispatch,
  includeMeaningOfLife,
} from './exampleAddons/enhancers'
import { print1, print2, print3 } from './exampleAddons/middleware'

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

const middlewareEnhancer = applyMiddleware(print1, print2, print3)

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  }
}

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
const composedEnhancer = compose(applyMiddleware(thunk))

// const store = createStore(rootReducer, undefined, sayHiOnDispatch)
// const store = createStore(rootReducer, preloadedState, composedEnhancer)

// Passing enhancer as the second arg, since there's no preloadedState
// const store = createStore(rootReducer, middlewareEnhancer)
const store = createStore(rootReducer, composedEnhancer)

export default store
