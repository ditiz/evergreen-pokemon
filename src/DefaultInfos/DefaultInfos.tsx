import React, { useState, useEffect } from "react";
import { Spinner, Pane } from "evergreen-ui";
import Card from "../Card";
import Actions from "../Actions";
import { Pokemon } from "../types";
const DefaultInfos = () => {
	const [pokemon, setPokemon] = useState<Pokemon>();

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
			.then(res => res.json())
			.then(res => {
				const newPokemon = res 
				console.log(newPokemon);
				setPokemon(newPokemon)
			});
	}, [setPokemon]);

	if (!pokemon) {
		return <Spinner size={100} />;
	}

	return (
		<div className="App">
			<Pane display="flex" alignItems="start" clearfix>
				<Card pokemon={pokemon} />
				<Actions />
			</Pane>
		</div>
	);
};

export default DefaultInfos;
