import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Changepassword from './pages/Changepassword'
import Signin from './pages/Signin'
import Otp from './pages/Otp'
import Success from './pages/Success'
import Welcome from './pages/Welcome'
import Signup from './pages/Signup';
import Confirm from './pages/Confirm';
import Notava from './pages/Notava';
import Success1 from './pages/Success/Success.jsx';
import Register from './pages/Register/Register.jsx';
import SuccessRegister from './pages/SuccessRegister/SuccessRegister.jsx';




function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path='/success1' element={<Success1/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/success-register' element={<SuccessRegister/>} />
          <Route path='/wel' element={<Welcome/>}/>
          <Route path='/' element={<Signup/>} />
          <Route path='/login' element={<Signin/>}/>
          <Route path='/forgot' element={<Changepassword />} />
          <Route path='/otp' element={<Otp/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/error1' element={<Notava/>}/>
          <Route path='/con' element={<Confirm />} />
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
