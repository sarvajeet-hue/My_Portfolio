

import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Projects } from './Components/Projects'
import { Experience } from './Components/Experience'
import { Skills } from './Components/Skills'

function App() {
  

  return (
     
      <div className='bg-blue-200 h-screen w-screen max-h-screen: sm:h-screen sm:w-screen'>
        <Navbar/>


        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/Projects' element={<Projects/>} ></Route>
          <Route path='/Experience' element={<Experience/>} ></Route>
          <Route path='/Skills' element={<Skills/>} ></Route>


        </Routes>


      </div>
    
  )
}

export default App
