import React from 'react'
import ReactDOM from 'react-dom'
import AddSubscription from './AddSubscription'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddSubscription />, div)
})

it('takes input and clears on submit', () => {
  const div = document.createElement('div')
  const addSubscription = ReactDOM.render(
    <AddSubscription setExpanded={ () => {} }/>,
    div
  )
  const value = 'I can change...'

  addSubscription.handleChange({ target: { value } })
  expect(addSubscription.state.url).toBe(value)

  addSubscription.submit({})
  expect(addSubscription.state.url).toBe('')
})
