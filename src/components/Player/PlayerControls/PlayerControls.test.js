import React from 'react'
import ReactDOM from 'react-dom'
import PlayerControls from './PlayerControls'

it('renders without crashing', () => {
  const errorSpy = jest.spyOn(console, 'error')
  const div = document.createElement('div')

  ReactDOM.render(<PlayerControls />, div)
  expect(errorSpy).not.toHaveBeenCalled()
})
