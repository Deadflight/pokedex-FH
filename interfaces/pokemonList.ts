export interface PokemonList {
    count:    number;
    next?:     string | null;
    previous?: string | null;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id: number;
    img: string;
}
