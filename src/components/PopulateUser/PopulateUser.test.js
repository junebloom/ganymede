import React from 'react'
import ReactDOM from 'react-dom'
import PopulateUser from './PopulateUser'

it('renders without crashing', () => {
  const errorSpy = jest.spyOn(console, 'error')
  const div = document.createElement('div')

  ReactDOM.render(<PopulateUser />, div)
  expect(errorSpy).not.toHaveBeenCalled()
})
