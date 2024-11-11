import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Product from './components/Product.jsx';

function App() {
  return (
    <Product />
  )
}

export default App
