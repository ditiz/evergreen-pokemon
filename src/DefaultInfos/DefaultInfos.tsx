import React, { useState, useEffect } from "react";
import { Spinner, Pane } from "evergreen-ui";
import Card from "../Card";
import Actions from "../Actions";
import { Pokemon } from "../types";
import TableMoves from "../TableMoves";

const MAX = 807;

const DefaultInfos = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>();
  const [pokeId, setPokeId] = useState<number>(Math.floor(Math.random() * MAX));
  const [showMovesTable, setShowMovesTable] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((res) => res.json())
      .then((res) => setPokemon(res));
  }, [pokeId, setPokemon]);

  const newPokemon = () => {
    setPokeId(Math.floor(Math.random() * MAX));
    setPokemon(null);
  };

  const toggleMoves = () => {
    setShowMovesTable((smt) => !smt);
  };

  if (!pokemon) {
    return <Spinner size={100} />;
  }

  console.log(pokemon);

  return (
    <Pane display="flex" flexDirection="column" justify-content="space-between">
      <Pane display="flex" alignItems="start" clearfix>
        <Card pokemon={pokemon} />
        <Actions newPokemon={newPokemon} toggleMoves={toggleMoves} />
      </Pane>
      {showMovesTable && pokemon.moves && (
        <Pane background="tint1">
          <TableMoves moves={pokemon.moves} />
        </Pane>
      )}
    </Pane>
  );
};

export default DefaultInfos;
