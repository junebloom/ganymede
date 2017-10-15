import React, { Component } from 'react'

class Player extends Component {
  // Set playback time to t
  setTime = t => {
    this.audio.currentTime = t
  }

  // Pause or unpause
  togglePlayback = () => {
    if (this.audio.paused) this.audio.play()
    else this.audio.pause()
  }

  render = () => (
    <audio
      src={this.props.url}
      onDurationChange={() => this.props.setDuration(this.audio.duration)}
      ref={audio => {
        this.audio = audio
      }}
    />
  )
}

export default Player
