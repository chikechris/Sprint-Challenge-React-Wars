import React from "react";

function CharacterCard({ name, gender, hair_color, birth_year, mass, height }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Birth Year: {birth_year}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Mass: {mass}</p>
      <p>Height: {height}</p>
      <p>gender: {gender}</p>
    </div>
  );
}

export default CharacterCard;
