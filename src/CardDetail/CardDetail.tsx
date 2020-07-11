import React from "react";
import { Pane, UnorderedList, ListItem } from "evergreen-ui";
import DetailType from "../DetailType";
import { Pokemon } from "../types";

interface CardDetailProps {
  pokemon: Pokemon;
}

const CardDetail = ({ pokemon }: CardDetailProps) => {
  return (
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
      <Pane>
        <UnorderedList>
          <ListItem>Height: {pokemon.height}</ListItem>
          <ListItem>
            <>
              {pokemon &&
                pokemon.types &&
                pokemon.types.map((type) => (
                  <DetailType key={type.slot} type={type} />
                ))}
            </>
          </ListItem>
        </UnorderedList>
      </Pane>
    </Pane>
  );
};

export default CardDetail;
