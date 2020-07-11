import React from "react";
import { Pane, Text, Spinner, Heading } from "evergreen-ui";

interface CardProps {
	pokemon: any;
}

const Card = ({ pokemon }: CardProps) => {

	console.log(pokemon);

	return (
		<Pane
			background="tint1"
			height={700}
			width={1000}
			display="flex"
			justifyContent="center"
			alignItems="center"
			elevation={1}
		>
			<Pane
				margin={10}
				height={500}
				width={500}
				border
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<img
					src={pokemon.sprites.front_default}
					style={{
						height: "100%",
						width: "100%"
					}}
					alt="pokemon image"
				/>
			</Pane>
			<Pane margin={10}>
				<Pane
					margin={5}
					height={100}
					width={350}
					border
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Heading size={700}>{pokemon.name}</Heading>
				</Pane>
				<Pane
					margin={5}
					height={500}
					width={350}
					border
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Text>Detail</Text>
				</Pane>
			</Pane>
		</Pane>
	);
};

export default Card;
