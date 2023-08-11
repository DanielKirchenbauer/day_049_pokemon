import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/Pages/Home/Home'
import { apiBaseLink } from './data/api'

function App() {

const [pokemons, setPokemons] = useState([]);

useEffect(() => {
  fetch(`${apiBaseLink}`)
  .then((response) => {
    if(!response) {
      throw new Error("Fetch went wrong!");
    }
    return response.json();
  })
  .then((pokemonData) => {
    setPokemons(pokemonData);
  })
  .catch((error) => console.log(error.message));
}, [])
console.log(pokemons);
console.log(pokemons.next)
// console.log(pokemon.result)
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
        <div>
          {
            pokemons.map((pokemon) => {


              pokemon.results.map((result) => (
                <div>
                      {result.name}
                </div>
              ))
            }

            ) 

          }
          {/* {pokemons.results[{}]} */}
        </div>
    </>
  )
}

export default App
