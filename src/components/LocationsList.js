import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locations, setLocation] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/location/')
      .then((resp) => setLocation(resp.data.results))
      .catch((err)=> console.log(err))
  }, []);

  return (
    <section className="location-list grid-view">
      {locations.map((location, index)=>{
        return (
          <div className="location" key ={index}>
            <LocationCard props={location} />
          </div>
          )
      })}
    </section>
  );
}


