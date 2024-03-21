import { Route, Routes } from "react-router-dom";
import Pokedex from "./components/Pokedex/Pokedex";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokedex/>} />
        <Route path="/pokemon/:id" element={<PokemonDetails />}/>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      
    </>
  
  )
}