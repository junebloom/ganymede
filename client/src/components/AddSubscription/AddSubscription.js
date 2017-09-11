import React, { Component } from 'react'
import './AddSubscription.css'

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
      <div className="AddSubscription">
        <input type="text"
          value={this.state.url}
          onKeyDown={this.handleSubmit}
          onChange={this.handleChange}
          placeholder="Enter an RSS/Atom feed URL"
        />
        <button onClick={this.handleSubmit}>Subscribe</button>
      </div>
    )
  }
}

export default AddSubscription
