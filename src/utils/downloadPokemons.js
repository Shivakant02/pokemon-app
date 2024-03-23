import axios from "axios";

   async function downloadPokemons(pokemonListState,setPokemonListState,DEFAULT_URL,limit=18) {
        const response = await axios.get(pokemonListState.pokedexurl ? pokemonListState.pokedexurl : DEFAULT_URL);
        
       let pokemonResult = response.data.results ? response.data.results:response.data.pokemon;
       
    //    console.log(pokemonResult);
pokemonResult=pokemonResult.slice(0,limit)
       const pokemonPromise = pokemonResult.map((p) => { 
           if (p.url) {
               return axios.get(p.url)
           }
           else if(p.pokemon.url){
               return axios.get(p.pokemon.url)
           }
       })
        
    //    console.log(pokemonPromise);
      

       const pokeListData = await axios.all(pokemonPromise)
       
       
        const pokeFinalList = pokeListData.map((pokemonData) => {
            const pokemon = pokemonData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        });

        setPokemonListState({ ...pokemonListState, pokeList: pokeFinalList, nextURL: response.data.next, prevURL: response.data.previous });
       
}
    export default downloadPokemons;