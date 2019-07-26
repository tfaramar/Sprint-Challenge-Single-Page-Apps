import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LocationCard from './LocationCard.js';

const LocationsList = function (props) {

    //console.log(props);
    // TODO: Add useState to track data from useEffect
    const [locations, setLocations] = useState([])

    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        const getLocations = () => {
            axios
                .get('https://rickandmortyapi.com/api/location')
                .then(response => {
                    //console.log(response.data.results)
                    setLocations(response.data.results);
                })
                .catch(error => {
                    console.error('There was a server error', error);
                });
        }

        getLocations();
    }, []);


    return (
        <section className='location-list grid-view'>
            <div className='card-wrapper'>
                {locations.map(data => (
                    //console.log(data),
                    <LocationCard key={data.id}
                        name={data.name}
                        type={data.type}
                        dimension={data.dimension} />
                ))}
            </div>

        </section>
    )

}

export default LocationsList;
