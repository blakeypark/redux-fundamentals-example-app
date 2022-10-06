import todosReducer from './todosSlice'

test('Toggles a todo based on id', () => {
  const initialState = [{ id: 0, text: 'Test text', completed: false }]

  const action = { type: 'todos/todoToggled', payload: 0 }
  const result = todosReducer(initialState, action)
  expect(result[0].completed).toBe(true)
})

test('Adds a todo item', () => {
  const initialState = []

  const action = { type: 'todos/todoAdded', payload: "Testing adding a todo" }
  const result = todosReducer(initialState, action)
  expect(result[0].text).toBe("Testing adding a todo")
  expect(result[0].id).toBe(0)
})