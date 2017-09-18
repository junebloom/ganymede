import React, { Component } from 'react'
import './AddSubscription.css'
import Icon from 'react-fontawesome'

// Input component for taking RSS/Atom urls and subscribing to them
class AddSubscription extends Component {
  state = {
    expanded: false,
    url: ''
  }

  expand = () => {
    this.setState({ expanded: true })
  }

  handleChange = e => this.setState({ url: e.target.value })

  submit = e => {
    if (e.type === 'keydown' && e.key !== 'Enter') return
    console.log(this.state.url)
    this.setState({
      expanded: false,
      url: ''
    })
  }

  render () {
    let input = (
      <div className='control is-expanded'>
        <input type='text'
          className='input'
          value={this.state.url}
          onChange={this.handleChange}
          onKeyDown={this.submit}
          placeholder='Enter an RSS feed URL'
        />
      </div>
    )

    if (!this.state.expanded) input = null

    return (
      <div className='AddSubscription'>
        <div className='field has-addons'>
          {input}
          <div className='control'>
            <a
              className='button is-primary is-outlined'
              onClick={this.state.expanded ? this.submit : this.expand}
            >
              <p>Add</p>
              <span className='icon'>
                <Icon name={this.state.expanded ? 'plus' : 'feed'}/>
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default AddSubscription
