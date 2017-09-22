import React, { Component } from 'react'
import Icon from '../Icon/Icon'
import './Player.css'

class Player extends Component {
  state = {
    paused: true,
    position: 0,
    duration: 0,
    title: 'H.I. #79 From Russia with Love',
    url: 'http://traffic.libsyn.com/hellointernet/HI79_FromRussiaWithLove.mp3'
  }

  // Take time in seconds and return a string formatted as hours:minutes:seconds
  formatTime (t) {
    const time = {
      h: Math.floor(t / 3600),
      m: Math.floor(t / 60) % 60,
      s: Math.floor(t) % 60
    }

    for (const unit of ['m', 's']) {
      if (time[unit] < 10) time[unit] = '0' + time[unit]
    }

    return `${time.h > 0 ? time.h + ':' : ''}${time.m}:${time.s}`
  }

  // Seek playback to time t
  seek (t) {
    this.setState({ position: t })
    this.audio.currentTime = t
  }

  // Pause or unpause
  togglePlayback = () => {
    this.setState({ paused: !this.state.paused })
    if (this.state.paused) this.audio.play()
    else this.audio.pause()
  }

  // Update duration of audio file
  updateDuration = () => {
    this.setState({ duration: this.audio.duration })
  }

  // Keep position state in sync with playback position
  trackPosition = () => {
    this.setState({ position: this.audio.currentTime })
    window.requestAnimationFrame(this.trackPosition)
  }

  // Begin tracking playback position when the component mounts
  // TODO: Stop on unmount?
  componentDidMount () {
    this.trackPosition()
  }

  render () {
    return (
      <div className='Player has-text-centered'>
        <audio
          src={this.state.url}
          ref={audio => { this.audio = audio }}
          onDurationChange={this.updateDuration}
        />

        <div className='level info is-mobile'>
          {/* Current time in audio */}
          <span className='level-left'>
            <span className='level-item has-text-grey-light'>
              {this.formatTime(this.state.position)}
            </span>
          </span>

          <span className='level-item episode-title'>
            <a className='episode-title-link'>{this.state.title}</a>
          </span>

          {/* Time remaining */}
          <span className='level-right has-text-grey-light'>
            <span className='level-item'>
              {this.formatTime(this.state.duration - this.state.position)}
            </span>
          </span>
        </div>

        <progress
          className='progress is-primary'
          value={this.state.position}
          max={this.state.duration}
          onClick={e => {
            const rect = e.target.getBoundingClientRect()
            const pos = (e.clientX - rect.x) / (rect.width - 1)
            this.seek(pos * this.state.duration)
          }}
        />

        <nav className='level controls is-mobile '>
          {/* Seek backwards */}
          <span className='level-item'>
            <button
              className='control button is-large'
              onClick={() => { this.seek(this.state.position - 10) }}
            >
              <Icon name='rotate-left'/>
            </button>
          </span>

          {/* Play/pause */}
          <span className='level-item'>
            <button
              className='control button is-large'
              onClick={this.togglePlayback}
            >
              <Icon name={this.state.paused ? 'play' : 'pause'} size='2x'/>
            </button>
          </span>

          {/* Seek forward */}
          <span className='level-item'>
            <button
              className='control button is-large'
              onClick={() => { this.seek(this.state.position + 30) }}
            >
              <Icon name='rotate-right'/>
            </button>
          </span>
        </nav>
      </div>
    )
  }
}

export default Player
