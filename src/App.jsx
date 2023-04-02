import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Pricelist from './assets/PriceList/Pricelist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-[90%] mx-auto">
       
      <Navbar></Navbar>

      <h1 className='text-5xl  font-bold'> Hello from Tailwind</h1>
      <Pricelist></Pricelist>
    </div>
  )
}

export default App
