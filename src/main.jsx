import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MovieLibrary from './paginas/MovieLibrary.jsx'
import Reserve from './paginas/Reserve.jsx'
import Movie from './paginas/Movie.jsx'
import {loader as InfoMovie} from './paginas/Movie.jsx'
import Formulario from './paginas/Formulario.jsx'
import {loader as NameMovie} from './paginas/Formulario.jsx'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Favorites from './paginas/Favorites.jsx'
import Tickets from './paginas/Tickets.jsx'



function AppLayout(){
  return<>
  <Provider store={store}>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
  </Provider> 
  </>
}

const router= createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    children:[{
      path:"/",
      element:<App/>
    },
    {
      path:"/movies",
      element:<MovieLibrary/>
    },
    {
      path:"/reserve",
      element:<Reserve/>
    },
    {
      path:"/movie/:id",
      element:<Movie/>,
      loader:InfoMovie
    },
    {
      path:"/favorites",
      element:<Favorites/>,
    },
    {
      path:"/tickets",
      element:<Tickets/>,
    },
    {
      path:"/form/:name/:foto",
      element:<Formulario/>,
      loader:NameMovie
    }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode >  
  <RouterProvider router={router}></RouterProvider>
</React.StrictMode>

)



