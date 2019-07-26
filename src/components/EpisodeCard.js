import React from 'react';
import { Card } from 'semantic-ui-react';

export default function EpisodeCard(props) {
    //console.log(props);
    return (
        <Card className='episode-card'>
            <Card.Content>
                <Card.Header>Name: {props.name}</Card.Header>
                <Card.Description>Episode: {props.episode}</Card.Description>
                <Card.Description>Air Date: {props.airdate}</Card.Description>
            </Card.Content>
        </Card>

    )
}