import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'


function App() {
  
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>
    </Router>
  )
  
}

export default App
