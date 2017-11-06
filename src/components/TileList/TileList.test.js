import React from 'react'
import ReactDOM from 'react-dom'
import TileList from './TileList'

it('renders without crashing', () => {
  const errorSpy = jest.spyOn(console, 'error')
  const div = document.createElement('div')

  ReactDOM.render(<TileList items={[{ imgSrc: '', title: 'meow' }]} />, div)
  expect(errorSpy).not.toHaveBeenCalled()
})
