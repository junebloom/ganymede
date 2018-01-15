import React from 'react'
import ReactDOM from 'react-dom'
import Auth from './Auth'

it('renders without crashing', () => {
  const errorSpy = jest.spyOn(console, 'error')
  const div = document.createElement('div')

  ReactDOM.render(<Auth />, div)
  expect(errorSpy).not.toHaveBeenCalled()
})
