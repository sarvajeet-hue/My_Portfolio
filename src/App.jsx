

import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'

function App() {
  

  return (
     
      <div className='bg-blue-200 h-screen w-screen sm:h-screen sm:w-screen'>
        <Navbar/>


        <Routes>
          <Route path='/' element={<Home/>} ></Route>


        </Routes>


      </div>
    
  )
}

export default App
