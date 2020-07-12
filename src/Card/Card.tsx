import React from "react";
import { Pane, Heading } from "evergreen-ui";
import CardDetail from "../CardDetail";
import CardImage from "../CardImage/CardImage";

interface CardProps {
  pokemon: any;
}

const Card = ({ pokemon }: CardProps) => {
  return (
    <Pane
      height={700}
      width={1000}
      display="flex"
      justifyContent="center"
      alignItems="start"
    >
      <CardImage pokemon={pokemon} />
      <Pane>
        <Pane
          background="tint1"
          elevation={1}
          height={100}
          width={350}
          margin={10}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size={900}>{pokemon.name.toUpperCase()}</Heading>
        </Pane>
        <CardDetail pokemon={pokemon} />
      </Pane>
    </Pane>
  );
};

export default Card;
