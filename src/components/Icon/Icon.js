import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FaIcon from 'react-fontawesome'

class Icon extends Component {
  render() {
    const classes = ['icon']
    if (this.props.size) classes.push('is-large')

    return (
      <span className={classes.join(' ')}>
        <FaIcon name={this.props.name} size={this.props.size} />
      </span>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default Icon
