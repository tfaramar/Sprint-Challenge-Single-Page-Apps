import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LocationsList = function(props) {

    console.log(props);
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getLocations = () => {
      axios
        .get('https://rickandmortyapi.com/api/location')
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.error('There was a server error', error);
        });
    }

    getLocations();
  }, []);

}

export default LocationsList;
