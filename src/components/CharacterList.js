import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([])
  // console.log(characters)
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((resp) => setCharacter(resp.data.results))
      .catch((err)=> console.log(err))
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map((character, index)=>{
        return (
          <div className="character" key={index} >
            <CharacterCard props ={character} />
          </div>
          )
      })}
    </section>
  );
}


