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
      width={350}
      margin={10}
      display="flex"
      justifyContent="center"
    >
      <Pane>
        <UnorderedList>
          <ListItem>
            <strong>Height:</strong> {pokemon.height}
          </ListItem>
          <ListItem>
            <>
              {pokemon && pokemon.types && (
                <>
                  <Pane marginBottom={5}>
                    <strong>Types:</strong>
                  </Pane>
                  {pokemon.types.map((type) => (
                    <DetailType key={type.slot} type={type} />
                  ))}
                </>
              )}
            </>
          </ListItem>
          <ListItem>
            {pokemon.game_indices && (
              <>
                <Pane marginBottom={5}>
                  <strong>Is in games:</strong>
                </Pane>
                <UnorderedList>
                  {pokemon.game_indices.length ? (
                    pokemon.game_indices.map((gameIndice) => (
                      <ListItem key={gameIndice.version.name}>
                        {gameIndice.version.name}
                      </ListItem>
                    ))
                  ) : (
                    <ListItem>None</ListItem>
                  )}
                </UnorderedList>
              </>
            )}
          </ListItem>
        </UnorderedList>
      </Pane>
    </Pane>
  );
};

export default CardDetail;
