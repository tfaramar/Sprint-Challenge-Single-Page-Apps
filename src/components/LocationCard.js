import React from 'react';
import { Card } from 'semantic-ui-react';

export default function LocationCard(props) {
  //console.log(props);
  return (
    <Card className='location-card'>
      <Card.Content>
        <Card.Header>Name: {props.name}</Card.Header>
        <Card.Meta>Type: {props.type}</Card.Meta>
        <Card.Meta>Dimension: {props.dimension}</Card.Meta>
      </Card.Content>
    </Card>

  )
}
