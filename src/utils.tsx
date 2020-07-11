import React from "react";

import { ReactComponent as Bug } from "./TypeIcons/bug.svg";
import { ReactComponent as Dark } from "./TypeIcons/dark.svg";
import { ReactComponent as Dragon } from "./TypeIcons/dragon.svg";
import { ReactComponent as Electric } from "./TypeIcons/electric.svg";
import { ReactComponent as Fairy } from "./TypeIcons/fairy.svg";
import { ReactComponent as Fighting } from "./TypeIcons/fighting.svg";
import { ReactComponent as Fire } from "./TypeIcons/fire.svg";
import { ReactComponent as Flying } from "./TypeIcons/flying.svg";
import { ReactComponent as Ghost } from "./TypeIcons/ghost.svg";
import { ReactComponent as Grass } from "./TypeIcons/grass.svg";
import { ReactComponent as Ground } from "./TypeIcons/ground.svg";
import { ReactComponent as Ice } from "./TypeIcons/ice.svg";
import { ReactComponent as Normal } from "./TypeIcons/normal.svg";
import { ReactComponent as Poison } from "./TypeIcons/poison.svg";
import { ReactComponent as Psychic } from "./TypeIcons/psychic.svg";
import { ReactComponent as Rock } from "./TypeIcons/rock.svg";
import { ReactComponent as Steel } from "./TypeIcons/steel.svg";
import { ReactComponent as Water } from "./TypeIcons/water.svg";

const iconProps = {
  width: 15,
  height: 15,
  style: {
    filter: "contrast(0%)",
  },
};

export const getIconFromType = (type: string) => {
  switch (type) {
    case "bug":
      return <Bug {...iconProps} />;
    case "dark":
      return <Dark {...iconProps} />;
    case "dragon":
      return <Dragon {...iconProps} />;
    case "electric":
      return <Electric {...iconProps} />;
    case "fairy":
      return <Fairy {...iconProps} color="" />;
    case "fighting":
      return <Fighting {...iconProps} />;
    case "fire":
      return <Fire {...iconProps} />;
    case "flying":
      return <Flying {...iconProps} />;
    case "ghost":
      return <Ghost {...iconProps} />;
    case "grass":
      return <Grass {...iconProps} />;
    case "ground":
      return <Ground {...iconProps} />;
    case "ice":
      return <Ice {...iconProps} />;
    case "normal":
      return <Normal {...iconProps} />;
    case "poison":
      return <Poison {...iconProps} />;
    case "psychic":
      return <Psychic {...iconProps} />;
    case "rock":
      return <Rock {...iconProps} />;
    case "steel":
      return <Steel {...iconProps} />;
    case "water":
      return <Water {...iconProps} />;
    default:
      return;
  }
};
