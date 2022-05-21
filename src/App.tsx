import { useState } from 'react'
import { Market, Navbar, PostDeal, Welcome } from './components'
import './App.css'

interface Window {
  ethereum: any
}

function App() {

  return (
    <h1 className="text-3xl font-bold underline">
      <div>
        <Navbar />
        <Welcome />
      </div>
      <Market />
      <PostDeal />
    </h1>
  )
};

export default App
