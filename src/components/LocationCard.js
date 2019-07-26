import React from 'react'

export default function LocationCard ( props ) {
  //console.log(props);
  return (
    <div className='location-card'>
      <h2>Name: {props.name}</h2>
      <p>Type: {props.type}</p>
      <p>Dimension: {props.dimension}</p>
    </div>
    
    )
}
