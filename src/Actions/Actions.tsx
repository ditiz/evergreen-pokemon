import React from "react";
import { Button, RandomIcon } from "evergreen-ui";

interface ActionsProps {
  newPokemon: () => void;
}

const Actions = ({ newPokemon }: ActionsProps) => {
  return (
    <Button
      elevation={1}
      appearance="primary"
      height={150}
      width={200}
      margin={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={newPokemon}
    >
      <RandomIcon size={40} />
    </Button>
  );
};

export default Actions;
