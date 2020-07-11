import React from "react";
import { TypesEntity } from "../types";
import { Text } from "evergreen-ui";
import { getIconFromType } from "../utils";

interface DetailTypeProps {
  type: TypesEntity;
}

const DetailType = ({ type }: DetailTypeProps) => {
  const pokeType = type.type.name;
  return (
    <>
      <Text>
        {getIconFromType(pokeType)} {pokeType}
      </Text>
      <br />
    </>
  );
};

export default DetailType;
