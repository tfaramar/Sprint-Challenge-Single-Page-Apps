import React, { useEffect, useState } from 'react';
import axios from 'axios';

//import CharacterCard from './CharacterCard.js';

const CharacterList = function (props) {

  console.log(props);
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

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
  }, []);


  return (
    <section className='character-list grid-view'>
      {/* <div className='card-wrapper'>
          {characters.map((data, i) => (
            <h1 key={i} name={data.name} />
          ))}
      </div> */}
    
    </section>

  )

  // function CharacterDetails({ character }) {
  //   const { image, name, status, species } = character;
  //   return (
  //     <CharacterCard character={character} />
  //   );

  // }

}

export default CharacterList;
