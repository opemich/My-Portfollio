import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Skills from "./pages/Skills"
import Project from "./pages/Project"
import Home from './pages/Home'

function App() {
  return (

    <BrowserRouter>
        <Header/>
       <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/project' element={<Project/>} />

       </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
