import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../Icon/Icon'
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

// Audio playback control UI component
class PlayerControls extends Component {
  render = () => (
    <div className="PlayerControls has-text-centered">
      <div className="level info is-mobile">
        {/* Current time in audio */}
        <span className="level-left">
          <span className="level-item has-text-grey-light">
            {formatTime(this.props.time)}
          </span>
        </span>

        <span className="level-item episode-title">
          <a className="episode-title-link">{this.props.title}</a>
        </span>

        {/* Time remaining */}
        <span className="level-right has-text-grey-light">
          <span className="level-item">
            {formatTime(this.props.duration - this.props.time)}
          </span>
        </span>
      </div>

      <progress
        className="progress is-primary"
        value={this.props.time}
        max={this.props.duration}
        onClick={e => {
          const rect = e.target.getBoundingClientRect()
          const pos = (e.clientX - rect.x) / (rect.width - 1)
          this.props.setTime(pos * this.props.duration)
        }}
      />

      <nav className="level controls is-mobile ">
        {/* Seek backwards */}
        <span className="level-item">
          <button
            className="control button is-large"
            onClick={() => {
              this.props.setTime(this.props.time - 10)
            }}
          >
            <Icon name="rotate-left" />
          </button>
        </span>

        {/* Play/pause */}
        <span className="level-item">
          <button
            className="control button is-large"
            onClick={this.props.togglePlayback}
          >
            <Icon name={this.props.paused ? 'play' : 'pause'} size="2x" />
          </button>
        </span>

        {/* Seek forward */}
        <span className="level-item">
          <button
            className="control button is-large"
            onClick={() => {
              this.props.setTime(this.props.time + 30)
            }}
          >
            <Icon name="rotate-right" />
          </button>
        </span>
      </nav>
    </div>
  )
}

PlayerControls.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  paused: PropTypes.bool.isRequired,
  setTime: PropTypes.func.isRequired,
  togglePlayback: PropTypes.func.isRequired
}

export default PlayerControls
