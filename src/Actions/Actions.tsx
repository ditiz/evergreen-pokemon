import React from "react";
import {Button, RandomIcon} from "evergreen-ui";

const Actions = () => {
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
		>
			<RandomIcon size={40} />
		</Button>
	);
};

export default Actions;
