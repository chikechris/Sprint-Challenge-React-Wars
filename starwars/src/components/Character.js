import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";


const CharactersDiv = styled.div`
  font-family: "serif", "Georgia";
  margin: 0 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log(res.data.results);
        const arrayOfCharacters = res.data.results;

        setCharacters(arrayOfCharacters);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <CharactersDiv>
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
    </CharactersDiv>
  );
}

export default Characters;
