import React, { Component } from 'react'
import './AddSubscription.css'
import Icon from 'react-fontawesome'

// Input component for taking RSS/Atom urls and subscribing to them
class AddSubscription extends Component {
  state = {
    url: ''
  }

  handleChange = e => this.setState({ url: e.target.value })

  submit = e => {
    if (e.type === 'keydown' && e.key !== 'Enter') return

    console.log(this.state.url)

    this.contract()
    this.setState({ url: '' })
  }

  expand = () => this.props.setExpanded(true)
  contract = () => this.props.setExpanded(false)

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
    return (
      <div className='AddSubscription'>
        <div className='field has-addons'>
          {this.props.expanded ? input : null}
          <div className='control'>
            <a
              className='button is-primary is-outlined'
              onClick={this.props.expanded ? this.contract : this.expand}
            >
              <p>Add</p>
              <span className='icon'>
                <Icon name={this.props.expanded ? 'plus' : 'feed'}/>
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default AddSubscription
