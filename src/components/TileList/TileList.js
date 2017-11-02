import React from 'react'
import PropTypes from 'prop-types'

const Tile = ({ image, title }) => (
  <div className="column is-6-mobile is-4-tablet is-3-desktop is-2-fullhd">
    <div className="card image is-square">
      <img src={image} alt={title} />
    </div>
  </div>
)

Tile.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

const TileList = ({ items }) => (
  <div className="columns is-mobile is-multiline">
    {items.map((item, index) => (
      <Tile image={item.image} title={item.title} key={index} />
    ))}
  </div>
)

TileList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Tile.propTypes)).isRequired
}

export default TileList
