import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBolt, faCoffee } from "@fortawesome/free-solid-svg-icons";

export const getIconFromType = (type: string) => {
	switch(type) {
		case "electric": 
			return <FontAwesomeIcon icon={faBolt} />
		default: 
			return <FontAwesomeIcon icon={faCoffee} />
	}
}
