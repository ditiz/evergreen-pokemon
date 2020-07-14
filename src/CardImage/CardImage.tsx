import React, { useState } from "react";
import { Pokemon } from "../types";
import { Pane, TabNavigation, Tab } from "evergreen-ui";

interface CardImageProps {
  pokemon: Pokemon;
}

const CardImage = ({ pokemon }: CardImageProps) => {
  const [currentSprite, setCurrentSprite] = useState<string>(
    pokemon.sprites.front_default
  );

  const spriteNames = Object.keys(pokemon.sprites).filter(
    (spriteName) => !!(pokemon.sprites as any)[spriteName]
  );

  const handleClick = (spriteName: string) => {
    setCurrentSprite((pokemon.sprites as any)[spriteName]);
  };

  return (
    <Pane display="flex" flexDirection="column">
      <Pane
        margin={10}
        padding={5}
        background="tint1"
        elevation={1}
        height={500}
        width={500}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={currentSprite}
          style={{
            height: "100%",
            width: "100%",
          }}
          alt="pokemon"
        />
      </Pane>
      <Pane
        padding={5}
        margin={10}
        background="tint1"
        elevation={1}
        width={500}
      >
        <TabNavigation>
          {spriteNames.map((spriteName) => (
            <Tab
              key={spriteName}
              onSelect={() => handleClick(spriteName)}
              isSelected={spriteName === currentSprite}
            >
              {spriteName}
            </Tab>
          ))}
        </TabNavigation>
      </Pane>
    </Pane>
  );
};

export default CardImage;
