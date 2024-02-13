import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieSlider from './components/MovieSlider'
import MovieLibrary from './paginas/MovieLibrary'
import About from './components/About'
import Oferta from './components/Offert'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  const {} = useSelector(state=>state.movies)
  const dispatch = useDispatch();


  return(
    <div>
      <MovieSlider></MovieSlider>
      <About></About>
      <Oferta></Oferta>
    </div>
  )
}

export default App
