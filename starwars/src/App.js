import React from "react";

import Characters from "./components/Character";
import styled from "styled-components";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const AppDiv = styled.div`
    text-align: center;
  `;
  const H1Div = styled.h1`
    text-shadow: 2px 2px 5px red;
    font-size: 50px;
    font-weight: 700;
    ${'' /* border: 2px solid rgb(255, 165, 20);
    border-width: 10px; */}
  `;

  return (
    <AppDiv className="App">
      <H1Div className="Header">React Wars</H1Div>
      <Characters />
    </AppDiv>
  );
};

export default App;
