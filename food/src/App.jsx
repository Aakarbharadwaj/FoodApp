import { useState } from 'react'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import './App.css'
import Items from './components/Card/Items'
function App() {


  return (
    <>
      <Header />
      <Card item={Items} />
    </>
  )
}

export default App
