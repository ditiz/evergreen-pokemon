import React from "react";
import { Pane, Heading } from "evergreen-ui";
import CardDetail from "../CardDetail";

interface CardProps {
	pokemon: any;
}

const Card = ({ pokemon }: CardProps) => {
	console.log(pokemon);

	return (
		<Pane
			height={700}
			width={1000}
			display="flex"
			justifyContent="center"
			alignItems="start"
		>
			<Pane
				margin={10}
				background="tint1"
				elevation={1}
				height={500}
				width={500}
				display="flex"
				justifyContent="center"
				alignItems="center"
				hoverElevation={3}
			>
				<img
					src={pokemon.sprites.front_default}
					style={{
						height: "100%",
						width: "100%"
					}}
					alt="pokemon"
				/>
			</Pane>
			<Pane>
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
					<Heading size={900}>
						{pokemon.name.toUpperCase()}
					</Heading>
				</Pane>
				<CardDetail pokemon={pokemon}/>
			</Pane>
		</Pane>
	);
};

export default Card;
