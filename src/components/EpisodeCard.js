import React from 'react'

export default function EpisodeCard ( props ) {
    //console.log(props);
    return (
      <div className='episode-card'>
        <h2>Name: {props.name}</h2>
        <p>Episode: {props.episode}</p>
        <p>Air Date: {props.airdate}</p>
      </div>
      
      )
  }