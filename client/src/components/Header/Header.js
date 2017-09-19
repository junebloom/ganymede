import React, { Component } from 'react'
import Icon from 'react-fontawesome'
import AddSubscription from '../AddSubscription/AddSubscription'
import './Header.css'

class Header extends Component {
  state = {
    isAddExpanded: false
  }

  setAddExpanded = expand => this.setState({ isAddExpanded: expand })

  render = () => (
    <nav className='Header level is-mobile'>
      <div className='level-left'>
        <span className='icon is-large'>
          <Icon name='rocket' size='3x'/>
        </span>
        <h1 className='is-size-2 has-text-weight-bold is-hidden-mobile'>
          Ganymede
        </h1>
      </div>
      <div className='level-right field is-grouped'>
        <div className='control'>
          <AddSubscription
            expanded={this.state.isAddExpanded}
            setExpanded={this.setAddExpanded}
          />
        </div>
        <div className='control'>
          <a className='button is-primary'>
            <span className='icon'>
              <Icon name='user-circle'/>
            </span>
            <p>Sign in</p>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
