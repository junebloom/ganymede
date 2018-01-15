import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

it('renders without crashing', () => {
  const errorSpy = jest.spyOn(console, 'error')
  const div = document.createElement('div')

  ReactDOM.render(<Header />, div)
  expect(errorSpy).not.toHaveBeenCalled()
})
