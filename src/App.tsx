import { useState } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Screens/Home';
import Shop from './Screens/Shop';
import Recipes from './Screens/Recipes'
import Headercomponent from './components/HeaderComponent';

function Root() {
  return (
    <>
      <Headercomponent />
      <main className='w-full'>
        <Outlet />
      </main>
    </>
  );

}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/recipes" element={<Recipes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
