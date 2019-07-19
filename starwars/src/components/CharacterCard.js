import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 300px;
  box-shadow: 10px 10px;
  border: 2px solid rgb(250, 26, 59);
  border-radius: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: rgb(255, 165, 20);
`;

const CharacterH2 = styled.h2`
  font-family: "monospace", "Lucida Console";
  text-shadow: 2px 2px 5px red;
  padding: 10px;
  font-size: 30px;
`;

const CharacterBio = styled.p`
  font-size: 20px;
  text-shadow: 2px 2px 5px black;
`;

function CharacterCard({ name, hair_color, birth_year, gender, mass, height }) {
  return (
    <CardDiv>
      <CharacterH2>Name: {name}</CharacterH2>
      <CharacterBio>Gender: {gender}</CharacterBio>
      <CharacterBio>Birth Year: {birth_year}</CharacterBio>
      <CharacterBio>Hair Color: {hair_color}</CharacterBio>
      <CharacterBio>Height: {height}</CharacterBio>
      <CharacterBio>Mass: {mass}</CharacterBio>
    </CardDiv>
  );
}

export default CharacterCard;
