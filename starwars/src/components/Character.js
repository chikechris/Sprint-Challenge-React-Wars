import React, { useState, useEffect } from "react";
import axios from "axios";

function Character() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const counter = 8;

    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log(res.data.data);
        const arrCharacter = res.data.data;

        setCharacter(arrCharacter);
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  }, []);

  return <div />;
}

export default Character;
