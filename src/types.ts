export interface Pokedex {
	pokemon: Pokemon[];
}
export interface Pokemon {
	name: string;
	sprites: Sprites;
	abilities?: AbilitiesEntity[] | null;
	base_experience: number;
	forms?:
		| AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies[]
		| null;
	game_indices?: GameIndicesEntity[] | null;
	height: number;
	held_items?: HeldItemsEntity[] | null;
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves?: MovesEntity[] | null;
	order: number;
	species: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
	stats?: StatsEntity[] | null;
	types?: TypesEntity[];
	weight: number;
}
export interface Sprites {
	back_default: string;
	back_female: string;
	back_shiny: string;
	back_shiny_female: string;
	front_default: string;
	front_female: string;
	front_shiny: string;
	front_shiny_female: string;
}
export interface AbilitiesEntity {
	ability: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
	is_hidden: boolean;
	slot: number;
}
export interface AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies {
	name: string;
	url: string;
}
export interface GameIndicesEntity {
	game_index: number;
	version: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface HeldItemsEntity {
	item: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
	version_details?: VersionDetailsEntity[] | null;
}
export interface VersionDetailsEntity {
	rarity: number;
	version: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface MovesEntity {
	move: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
	version_group_details?: VersionGroupDetailsEntity[] | null;
}
export interface VersionGroupDetailsEntity {
	level_learned_at: number;
	move_learn_method: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
	version_group: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface StatsEntity {
	bae_stat: number;
	effort: number;
	stat: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface TypesEntity {
	slot: number;
	type: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
