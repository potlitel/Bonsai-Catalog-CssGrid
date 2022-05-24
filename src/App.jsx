import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { BonsaiDetails } from './components/BonsaiDetails'
import { Routes, Route, Link } from "react-router-dom"
import { BonsaiMainView } from './components/BonsaiMainView'

function App() {
  return (
    <div className="App">
      {/*<header>
        <h1> Bonsais </h1>
      </header>
      <main>
        <BonsaisGrid />
      </main>*/}
      <Routes>
        <Route path='/' element={<BonsaiMainView />}></Route>
        <Route path='/bonsai/:id' element={<BonsaiDetails />}></Route>
      </Routes>
    </div>
  )
}

export default App
