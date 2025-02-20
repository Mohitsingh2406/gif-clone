import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import Category from './pages/category'
import Search from './pages/search'
import GifPage from './pages/single-gif'
import Favorites from './pages/favorites'
import Home from './pages/home'


const router = createBrowserRouter([
  {
    element:<AppLayout/>,

    children:[
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/:category',
        element:<Category/>
      },
      {
        path: '/search/:query',
        element:<Search/>
      },
      {
        path: '/:type/:slug',
        element:<GifPage/>
      },
      {
        path: '/favorites',
        element:<Favorites/>
      },
    ]
  }
])
function App() {
  return <RouterProvider router={router}/>
}

export default App
