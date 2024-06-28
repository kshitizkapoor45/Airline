
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Productlist from './components/Productlist'
import ProductDetails from './components/ProductDetails'
import Breadcrumbs from './components/Breadcrumbs'

function App() {


  return (
    <>
    <h1>Euphora</h1>
    <BrowserRouter>
    <Breadcrumbs />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Products' element={<Productlist />} />
      <Route path='/Products/:id' element={<ProductDetails />} />
    </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
