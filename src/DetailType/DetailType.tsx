import React from "react";
import { TypesEntity } from "../types";
import { ListItem, Text } from "evergreen-ui";
import { getIconFromType } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
interface DetailTypeProps {
  type: TypesEntity;
}

const DetailType = ({ type }: DetailTypeProps) => {
  const pokeType = type.type.name;
	return (
    <>
      <Text>{getIconFromType(pokeType)} {pokeType}</Text>
    </>
  );
};

export default DetailType;
