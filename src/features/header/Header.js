import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { saveNewTodo } from '../todos/todosSlice'

const Header = () => {
  // State
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => e.target.value.trim()

  const handleKeyDown = (e) => {
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
      dispatch(saveNewTodo(trimmedText))
      setText('')
    }
  }

  // return (
  //   <div>
  //     <input
  //       type="text"
  //       placeholder="What needs to be done?"
  //       autoFocus
  //       value={text}
  //       onChange={handleChange}
  //       onKeyDown={handleKeyDown}
  //     />
  //   </div>
  // )
}

export default Header
