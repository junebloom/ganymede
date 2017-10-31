import React from 'react'

const Tile = ({ imgSrc, title }) => (
  <div className="column is-6-mobile is-4-tablet is-3-desktop is-2-fullhd">
    <div className="card image is-square">
      <img src={imgSrc} alt={title} />
    </div>
  </div>
)

const TileList = ({ items }) => (
  <div className="columns is-mobile is-multiline">
    {items.map((item, index) => (
      <Tile imgSrc={item.imgSrc} title={item.title} key={index} />
    ))}
  </div>
)

export default TileList
