import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList'

function PokemonList() {
    const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon'
    const [pokemonListState,setPokemonListState]=usePokemonList(DEFAULT_URL)
    return (
        <div className='pokeListWrapper'>
            <div id='poke-header'>Pokemon List here</div>

            <div className='page-control'>
                <button onClick={()=>setPokemonListState({...pokemonListState,pokedexurl:pokemonListState.prevURL})}>Prev</button>
                <button onClick={()=>setPokemonListState({...pokemonListState,pokedexurl:pokemonListState.nextURL})}>Next</button>
            </div>
            <div className='poke-list'>
            {pokemonListState.pokeList.map( pokemon=> < Pokemon
                name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />)}
                </div>
        </div>
    )
}

export default PokemonList