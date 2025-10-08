import todosReducer from './todosSlice'

test('Toggles a todo based on id', () => {
  const initialState = [{ id: 0, text: 'Test text', completed: false }]

  const action = { type: 'todo/todoToggled', payload: 0 }
  const result = todosReducer(initialState, action)
  expect(result[0].completed).toBe(true)
})
