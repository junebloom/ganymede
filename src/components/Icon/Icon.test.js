import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './Icon'

it('renders without crashing', () => {
  const errorSpy = jest.spyOn(console, 'error')
  const div = document.createElement('div')

  ReactDOM.render(<Icon name="heart" />, div)
  expect(errorSpy).not.toHaveBeenCalled()
})
