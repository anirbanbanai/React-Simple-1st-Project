import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import FAQ from './Components/FAQ/FAQ'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <FAQ></FAQ>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
