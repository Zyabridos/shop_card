import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css'
import Dashboard from './components/Dashboard.jsx'
import RootLayout from './components/RootLayout.jsx'
import Cart from './components/Cart.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Product from './components/Product.jsx';

// react-router-dom - это такая полезная штука, которая позволяет задавать пути по страницам (например, 'http://localhost:5173/cart' или 'http://localhost:5173/dashboard')
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <RootLayout/> }>
      <Route index element={ <Dashboard /> }></Route>
      <Route path="/cart" element={ <Cart /> }></Route>
    </Route>
  ))
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
      <Product />
    </div>
  )
}

export default App
