import React from "react";
import { Button, RandomIcon, Pane, PanelTableIcon } from "evergreen-ui";

interface ActionsProps {
  newPokemon: () => void;
}

const Actions = ({ newPokemon }: ActionsProps) => {
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
        onClick={newPokemon}
      >
        <PanelTableIcon size={40} />
      </Button>
    </Pane>
  );
};

export default Actions;
