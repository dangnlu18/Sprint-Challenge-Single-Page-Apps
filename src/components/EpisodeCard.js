import React from "react";
import { Link } from 'react-router-dom';
import { Card, Icon, Image} from 'semantic-ui-react';

export default function EpisodeCard({props}) {
  return(
  	  	<Card className="episode-card">
		  	<h2> Name: {props.name} </h2>
		  	<h3> Air Date: {props.air_date} </h3>
		  	<h4> Episode: {props.episode} </h4>
		  	<Link to="./"> Home </Link>
		</Card>
  	)
}
