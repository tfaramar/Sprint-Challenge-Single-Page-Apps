import React, { useEffect, useState } from 'react';
import axios from 'axios';

import EpisodeCard from './EpisodeCard.js';

const EpisodesList = function (props) {

    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        const getEpisodes = () => {
            axios
                .get('https://rickandmortyapi.com/api/episode')
                .then(response => {
                    //console.log(response.data.results)
                    setEpisodes(response.data.results);
                })
                .catch(error => {
                    console.error('There was a server error', error);
                });
        }

        getEpisodes();
    }, []);


        return (
        <section className='episode-list grid-view'>
            <div className='card-wrapper'>
                {episodes.map(data => (
                    //console.log(data),
                    <EpisodeCard key={data.id}
                        name={data.name}
                        type={data.type}
                        dimension={data.dimension} />
                ))}
            </div>

        </section>
    )

}

export default EpisodesList;
