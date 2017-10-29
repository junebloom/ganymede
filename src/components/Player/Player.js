import React, { Component } from 'react'
import PlayerControls from './PlayerControls/PlayerControls'

class Player extends Component {
  state = {
    paused: true,
    time: 0,
    duration: 0,
    title: 'H.I. #79 From Russia with Love',
    src: 'http://traffic.libsyn.com/hellointernet/HI79_FromRussiaWithLove.mp3'
  }

  // Set the length of the audio track
  // NOTE: This does not change the actual audio duration,
  // only the component state. (So it can be used by the UI)
  setDuration = duration => {
    this.setState({ duration })
  }

  // Set playback time to t
  setTime = time => {
    this.audio.currentTime = time
    this.setState({ time })
  }

  // Pause or unpause
  togglePlayback = () => {
    if (this.audio.paused) this.audio.play()
    else this.audio.pause()
    this.setState({ paused: this.audio.paused })
  }

  componentDidMount = () => {
    const syncTime = () => {
      this.setState({ time: this.audio.currentTime })
      window.requestAnimationFrame(syncTime)
    }

    syncTime()
  }

  render = () => (
    <div>
      <audio
        src={this.state.src}
        onDurationChange={() => this.setDuration(this.audio.duration)}
        ref={audio => {
          this.audio = audio
        }}
      />

      <PlayerControls
        title={this.state.title}
        paused={this.state.paused}
        time={this.state.time}
        duration={this.state.duration}
        togglePlayback={this.togglePlayback}
        setTime={this.setTime}
        setDuration={this.setDuration}
      />
    </div>
  )
}

export default Player
