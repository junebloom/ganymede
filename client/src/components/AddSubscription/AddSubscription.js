import React, { Component } from 'react'
import './AddSubscription.css'

class App extends Component {
  state = { url: '' }

  handleChange = e => this.setState({ url: e.target.value })

  submit = e => {
    if (e.key && e.key !== 'Enter') return
    console.log(this.state.url)
    this.setState({ url: '' })
  }

  render () {
    return (
      <div className="AddSubscription">
        <input type="text"
          value={this.state.url}
          onKeyDown={this.submit}
          onChange={this.handleChange}
          placeholder="Enter an RSS/Atom feed url"
        />
        <button onClick={this.submit}>Subscribe</button>
      </div>
    )
  }
}

export default App
