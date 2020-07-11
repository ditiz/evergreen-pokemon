import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import { Pane, Button, Text, RandomIcon, Spinner } from "evergreen-ui";
import Card from "./Card";

function App() {
	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
			.then(res => res.json())
			.then(res =>
				setPokemon({
					name: res.name,
					...res
				})
			);
	}, [setPokemon]);


	if (!pokemon) {
		return <Spinner size={100} />;
	}

	return (
		<Suspense fallback={<Text>Loading</Text>}>
			<div className="App">
				<Pane
					display="flex"
					alignItems="start"
					clearfix
				>
					<Card pokemon={pokemon} />

					<Button
						elevation={1}
						appearance="primary"
						height={150}
						width={200}
						marginLeft={25}
						marginBottom={25}
						display="flex"
						justifyContent="center"
						alignItems="center"
						borderRadius="0.25rem"
					>
						<RandomIcon size={40} />
					</Button>
				</Pane>
			</div>
		</Suspense>
	);
}

export default App;
