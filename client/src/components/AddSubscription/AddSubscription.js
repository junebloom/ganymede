import React, { Component } from 'react'
import Icon from 'react-fontawesome'

// Input component for taking RSS/Atom urls and subscribing to them
class AddSubscription extends Component {
  state = { url: '' }

  handleChange = e => this.setState({ url: e.target.value })

  handleSubmit = e => {
    if (e.type === 'keydown' && e.key !== 'Enter') return
    console.log(this.state.url)
    this.setState({ url: '' })
  }

  render () {
    return (
      <div className='field has-addons'>
        <div className='control is-expanded'>
          <input type='text'
            className='input'
            value={this.state.url}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
            placeholder='Enter an RSS/Atom feed URL'
          />
        </div>
        <div className='control'>
          <button className='button is-primary' onClick={this.handleSubmit}>
            <Icon className='icon' name='plus'/>
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    )
  }
}

export default AddSubscription
