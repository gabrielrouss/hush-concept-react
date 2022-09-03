import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Contact from './pages/contact';
import HomePage from './pages/home-page'

function RoutesControlller() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contato' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesControlller;