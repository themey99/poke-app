// Generated by https://quicktype.io

export type PokemonListResponse = {
  count: number;
  next: string;
  previous: null | string;
  results: PokemonResult[];
};

export type PokemonResult = {
  name: string;
  url: string;
};

export type PokemonDetailRespose = {
  abilities: Ability[];
  height: number;
};

export type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};
