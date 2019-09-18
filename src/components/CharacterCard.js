import React from "react";
import { Link } from  'react-router-dom';
import { Card, Icon, Image} from 'semantic-ui-react';

export default function CharacterCard({props}) {

  return (
  	<Card className="character-card">
  		<img src={props.image} alt="character from Rick and Morty" />
  		<Card.Content>
		  	<Card.Header> Name: {props.name} </Card.Header>
		  	<Card.Meta> Status: {props.status} </Card.Meta>
		  	<Card.Description> Species: {props.species} </Card.Description>

		  	<Link to="./episodes"> Episode </Link>
	  	</Card.Content>
	</Card>
  	)
}


