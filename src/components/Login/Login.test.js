import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'

it('renders without crashing', () => {
  const errorSpy = jest.spyOn(console, 'error')
  const div = document.createElement('div')

  ReactDOM.render(<Login />, div)
  expect(errorSpy).not.toHaveBeenCalled()
})
