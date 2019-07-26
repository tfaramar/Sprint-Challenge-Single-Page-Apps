import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState()

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response.data.results)
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error('There was a server error', error);
        });
    }

    getCharacters();
  }, [])

  return (
    <section className='character-list grid-view'>
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>

  )



}
