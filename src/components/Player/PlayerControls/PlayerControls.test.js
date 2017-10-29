import React from 'react'
import ReactDOM from 'react-dom'
import PlayerControls from './PlayerControls'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PlayerControls />, div)
})
