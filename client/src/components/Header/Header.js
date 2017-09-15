import React, { Component } from 'react'
import Icon from 'react-fontawesome'
import './Header.css'

class Header extends Component {
  render = () => (
    <nav className='Header level is-mobile'>
      <div className='level-left'>
        <span className='icon is-large'>
          <Icon name='rocket' size='3x'/>
        </span>
        <h1 className='title is-hidden-mobile'>Ganymede</h1>
      </div>
      <div className='level-right'>
        <a className='button is-primary'>
          <span className='icon'>
            <Icon name='user-circle'/>
          </span>
          <p>Sign in</p>
        </a>
      </div>
    </nav>
  )
}

export default Header
