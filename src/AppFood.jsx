import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Layouts } from "./components/Layouts"
import  Home  from './components/routes/Home'
import OurFood from './components/routes/OurFood'
import Contact from './components/routes/Contact'
import './estilos/AppFood.css'

function AppFood() {
  return (
    <>

      <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Layouts/>}>
              <Route index element={<Home />} ></Route>
              <Route path='/about' element={<OurFood />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppFood;