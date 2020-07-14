import React from "react";
import { Button, RandomIcon, Pane, PanelTableIcon } from "evergreen-ui";

interface ActionsProps {
  newPokemon: () => void;
  toggleMoves: () => void;
}

const Actions = ({ newPokemon, toggleMoves }: ActionsProps) => {
  return (
    <Pane>
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

      <Button
        elevation={1}
        appearance="primary"
        intent="success"
        height={150}
        width={200}
        margin={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={toggleMoves}
      >
        <PanelTableIcon size={40} />
      </Button>
    </Pane>
  );
};

export default Actions;
