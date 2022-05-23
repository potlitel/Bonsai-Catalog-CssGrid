import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BonsaisGrid } from './components/BonsaisGrid'

function App() {
  return (
    <div className="App">
      <header>
        <h1> Bonsais </h1>
      </header>
      <main>
        <BonsaisGrid />
      </main>
    </div>
  )
}

export default App
