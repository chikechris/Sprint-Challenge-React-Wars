import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function Character() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const counter = 8;

    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log(res.data.data);
        const arrCharacters = res.data.data;

        setCharacters(arrCharacters);
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  }, []);

  return (
    <div>
      {characters.map((character, index) => (
        <CharacterCard
          key={index}
          name={character.name}
          gender={character.gender}
          hair_color={character.hair_color}
          mass={character.mass}
          height={character.height}
          birth_year={character.birth_year}
        />
      ))}
    </div>
  );
}

export default Character;
