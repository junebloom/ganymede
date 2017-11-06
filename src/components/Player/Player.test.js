import React from 'react'
import ReactDOM from 'react-dom'
import Player from './Player'

it('renders without crashing', () => {
  const errorSpy = jest.spyOn(console, 'error')
  const div = document.createElement('div')

  ReactDOM.render(<Player />, div)
  expect(errorSpy).not.toHaveBeenCalled()
})
