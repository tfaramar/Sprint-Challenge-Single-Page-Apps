import React from 'react';


export default function CharacterCard ( props ) {
  //console.log(props);
  return (
    <div className='character-card'>
      <img src={props.picture} alt={'Drawing of Character'} />
      <h2>Name: {props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      <p>Origin: {props.origin}</p>
    </div>
    
    )
}
