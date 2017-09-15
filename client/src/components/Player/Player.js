import React, { Component } from 'react'
import Icon from 'react-fontawesome'
import './Player.css'

class Player extends Component {
  state = {
    paused: true,
    position: 2222,
    length: 5890,
    title: 'H.I. #79 From Russia with Love',
    url: 'http://traffic.libsyn.com/hellointernet/HI79_FromRussiaWithLove.mp3'
  }

  togglePlayback = () => {
    this.setState({ paused: !this.state.paused })
  }

  seek (t) {
    return () => this.setState({ position: this.state.position + t })
  }

  // Take time in seconds and return a string formatted as hours:minutes:seconds
  formatTime (t) {
    const time = {
      h: Math.floor(t / 3600),
      m: Math.floor(t / 60) % 60,
      s: t % 60
    }

    for (const unit of ['m', 's']) {
      if (time[unit] < 10) time[unit] = '0' + time[unit]
    }

    return `${time.h > 0 ? time.h + ':' : ''}${time.m}:${time.s}`
  }

  render () {
    return (
      <div className='Player has-text-centered'>
        <div className='level info is-mobile'>
          <span className='level-left'>
            <span className='level-item has-text-grey-light'>
              {this.formatTime(this.state.position)}
            </span>
          </span>

          <span className='level-item episode-title'>
            <a className='episode-title-link'>{this.state.title}</a>
          </span>

          <span className='level-right has-text-grey-light'>
            <span className='level-item'>
              {this.formatTime(this.state.length - this.state.position)}
            </span>
          </span>
        </div>

        <progress
          className='progress is-primary is-small'
          value={this.state.position}
          max={this.state.length}
        >
        </progress>

        <nav className='level controls is-mobile '>
          <span className='level-item'>
            <button className='button is-large is-white' onClick={this.seek(-10)}>
              <span className='icon'>
                <Icon name='rotate-left'/>
              </span>
            </button>
          </span>

          <span className='level-item'>
            <button className='button is-large is-white' onClick={this.togglePlayback}>
              <span className='icon'>
                <Icon name={this.state.paused ? 'play' : 'pause'} size='2x'/>
              </span>
            </button>
          </span>

          <span className='level-item'>
            <button className='button is-large is-white' onClick={this.seek(30)}>
              <span className='icon'>
                <Icon name='rotate-right'/>
              </span>
            </button>
          </span>
        </nav>
      </div>
    )
  }
}

export default Player
