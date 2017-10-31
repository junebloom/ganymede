import React from 'react'
import ReactDOM from 'react-dom'
import TileList from './TileList'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TileList items={[{ imgSrc: '', title: 'meow' }]} />, div)
})
