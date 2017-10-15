import React, { Component } from 'react'
import Icon from '../Icon/Icon'
import './PlayerControls.css'

// Take time in seconds and return a string formatted as hours:minutes:seconds
function formatTime(t) {
  // Get hours, minutes, and seconds separately
  const time = {
    h: Math.floor(t / 3600),
    m: Math.floor(t / 60) % 60,
    s: Math.floor(t) % 60
  }

  // Add a zero to the front of single digit minutes and seconds
  for (const unit of ['m', 's']) {
    if (time[unit] < 10) time[unit] = '0' + time[unit]
  }

  // Return the formatted string
  return `${time.h > 0 ? time.h + ':' : ''}${time.m}:${time.s}`
}

// UI for controlling the underling Player component
class PlayerControls extends Component {
  state = {
    paused: true,
    position: 0,
    duration: 0,
    title: 'H.I. #79 From Russia with Love',
    url: 'http://traffic.libsyn.com/hellointernet/HI79_FromRussiaWithLove.mp3'
  }

  render() {
    return (
      <div className="PlayerControls has-text-centered">
        <div className="level info is-mobile">
          {/* Current time in audio */}
          <span className="level-left">
            <span className="level-item has-text-grey-light">
              {this.formatTime(this.state.position)}
            </span>
          </span>

          <span className="level-item episode-title">
            <a className="episode-title-link">{this.state.title}</a>
          </span>

          {/* Time remaining */}
          <span className="level-right has-text-grey-light">
            <span className="level-item">
              {this.formatTime(this.state.duration - this.state.position)}
            </span>
          </span>
        </div>

        <progress
          className="progress is-primary"
          value={this.state.position}
          max={this.state.duration}
          onClick={e => {
            const rect = e.target.getBoundingClientRect()
            const pos = (e.clientX - rect.x) / (rect.width - 1)
            this.seek(pos * this.state.duration)
          }}
        />

        <nav className="level controls is-mobile ">
          {/* Seek backwards */}
          <span className="level-item">
            <button
              className="control button is-large"
              onClick={() => {
                this.seek(this.state.position - 10)
              }}
            >
              <Icon name="rotate-left" />
            </button>
          </span>

          {/* Play/pause */}
          <span className="level-item">
            <button
              className="control button is-large"
              onClick={this.togglePlayback}
            >
              <Icon name={this.state.paused ? 'play' : 'pause'} size="2x" />
            </button>
          </span>

          {/* Seek forward */}
          <span className="level-item">
            <button
              className="control button is-large"
              onClick={() => {
                this.seek(this.state.position + 30)
              }}
            >
              <Icon name="rotate-right" />
            </button>
          </span>
        </nav>
      </div>
    )
  }
}

export default PlayerControls
