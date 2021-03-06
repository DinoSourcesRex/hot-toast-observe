export interface PokemonDetails {
  name: string;
  id: number;
  sprites: Sprites;
  abilities?: Array<any>;
  types?: Array<any>;
}

export interface Sprites {
  front_default: string;
}
