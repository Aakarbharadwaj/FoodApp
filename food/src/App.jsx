import { useState } from 'react'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import './App.css'
import Items from './utils/Items'
// import Search from './components/Search/Search'
function App() {

  return (
    <>
      <Header />
      {/* <Search new={Items}/> */}
      <Card item={Items} />
    </>
  )

}

export default App
