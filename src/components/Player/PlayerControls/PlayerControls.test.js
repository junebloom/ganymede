import React from 'react'
import ReactDOM from 'react-dom'
import PlayerControls from './PlayerControls'

it('renders without crashing', () => {
  const errorSpy = jest.spyOn(console, 'error')
  const div = document.createElement('div')

  ReactDOM.render(
    <PlayerControls
      title="foo"
      duration={1000}
      time={31}
      paused={false}
      setTime={() => {}}
      togglePlayback={() => {}}
    />,
    div
  )
  expect(errorSpy).not.toHaveBeenCalled()
})
