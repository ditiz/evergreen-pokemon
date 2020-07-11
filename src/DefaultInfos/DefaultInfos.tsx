import React, { useState, useEffect } from "react";
import { Spinner } from "evergreen-ui";
import Card from "../Card";
import Actions from "../Actions";
import { Pokemon } from "../types";

const MAX = 807;

const DefaultInfos = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>();
  const [pokeId, setPokeId] = useState<number>(Math.floor(Math.random() * MAX));

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((res) => res.json())
      .then((res) => setPokemon(res));
  }, [pokeId, setPokemon]);

  const newPokemon = () => {
    setPokeId(Math.floor(Math.random() * MAX));
    setPokemon(null);
  };

  if (!pokemon) {
    return <Spinner size={100} />;
  }

  return (
    <>
      <Card pokemon={pokemon} />
      <Actions newPokemon={newPokemon} />
    </>
  );
};

export default DefaultInfos;
