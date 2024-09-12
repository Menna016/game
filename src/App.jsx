import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Permadeath from './components/permadeath/Permadeath';
import Pixel from './components/pixel/Pixel';
import Sailing from './components/sailing/Sailing';
import Shooter from './components/shooter/Shooter';
import Superhero from './components/superhero/superhero';
import Mmorpg from './components/mmorpy/Mmorpg';
import NotFound from './components/notfound/NotFound';
import GemaDetails from './components/gameDetails/GemaDetails';



function App() {
  const [count, setCount] = useState(0)
  const routing = createBrowserRouter(
    [
      {
        element: <Layout />, path: "", children: [
          { index: true, element: <Mmorpg /> },
          { path: "Permadeath", element: <Permadeath /> },
          { path: "Pixel", element: <Pixel /> },
          { path: "Sailing", element: <Sailing /> },
          { path: "Shooter", element: <Shooter /> },
          { path: "Superhero", element: <Superhero /> },
          { path: "gameD/:id", element: <GemaDetails/> },
          { path: "*", element: <NotFound/> }
        ]
      }
    ])
  return (
    <>
     <RouterProvider router={routing} />

    </>
  )
}


export default App
