
import { useEffect, useState } from "react";
import downloadPokemons from "../utils/downloadPokemons";

function PokemonList(DEFAULT_URL) {
    
    
    
    const [pokemonListState, setPokemonListState] = useState({
        pokeList: [],
        pokedexurl: DEFAULT_URL,
        nextURL: DEFAULT_URL,
        prevURL: DEFAULT_URL
        
    });
   
 
    useEffect(() => {
        downloadPokemons(pokemonListState,setPokemonListState,DEFAULT_URL)
    }, [pokemonListState.pokedexurl])

    return [pokemonListState, setPokemonListState];
}

export default PokemonList;