
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Projects } from './Components/Projects'
import { Experience } from './Components/Experience'
import { Education } from './Components/Education'
import { ContactMe } from './Components/ContactMe'
import  axios  from 'axios'



  
async function data (){
  const response =  await axios.get('http://localhost/wp-demo/?page_id=11')
  console.log("response:" , response)
} 


function App() {
  useEffect( () => {
    data()  
  } , [])



  return (
     
      <div className='px-8'>
        <Navbar/>


        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/Education'  element={<Education/>}/>
          <Route path='/Projects' element={<Projects/>} ></Route>
          <Route path='/Experience' element={<Experience/>} ></Route>
          <Route path='/ContactMe' element = {<ContactMe/>} />
          


        </Routes>


      </div>
    
  )
}

export default App
