import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { saveNewTodo } from '../todos/todosSlice'

const Header = () => {
  // State
  const [text, setText] = useState('')
  const [status, setStatus] = useState('idle')

  const dispatch = useDispatch()

  const handleChange = (e) => setText(e.target.value.trim())

  const handleKeyDown = async (e) => {
    const trimmedText = e.target.value.trim()
    //   If the user pressed the Enter key:
    // if (e.key === 'Enter' && trimmedText) {
    //   // // Dispatch the "todo added" action with this text
    //   // dispatch({ type: 'todos/todoAdded', payload: trimmedText })
    //   const saveNewTodoThunk = saveNewTodo(trimmedText)
    //   // Then dispatch the thunk function itself
    //   dispatch(saveNewTodoThunk)
    //   //   And clear out the text input
    //   setText('')
    // }

    if (e.which === 13 && trimmedText) {
      // Create the thunk function and immediately dispatch it
      setStatus('loading')
      await dispatch(saveNewTodo(trimmedText))
      setText('')
      setStatus('idle')
    }
  }

  let isLoading = status === 'loading'
  let placeholder = isLoading ? '' : 'What needs to be done?'
  let loader = isLoading ? <div className="loader" /> : null

  return (
    <header className="header">
      <input
        className="new-todo"
        type="text"
        placeholder={placeholder}
        autoFocus
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      {loader}
    </header>
  )
}

export default Header
