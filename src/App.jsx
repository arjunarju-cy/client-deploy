import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CreateUser } from './CreateUser'
import UpdateUser from './UpdateUser.jsx'
import Users from './Users.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/update/:id' element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

