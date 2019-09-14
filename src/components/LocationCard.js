import React from "react";
import { Link } from 'react-router-dom';
import { Card, Icon, Image} from 'semantic-ui-react';


export default function LocationCard({ props }) {
  return (
  	  	<Card className="location-card">
		  	<h2> Name: {props.name} </h2>
		  	<h3> Type {props.type} </h3>
		  	<h4> Dimension: {props.dimension} </h4>
		  	<h4> Residents: {props.residents.length} </h4>
		  	<Link to="./"> Home </Link>
		</Card>
  	)
}
