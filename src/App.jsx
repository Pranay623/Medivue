import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-5'>
      <Router>
     {/* <h1 className='text-4xl'>Heelloo</h1> */}
     <Routes>
      <Route path="/" element={<Hero />} />
     </Routes>
     </Router>
    </div>
    
    </>
  )
}

export default App
