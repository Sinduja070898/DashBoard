import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Form from './Authentication/Form';
import DashBoard from './DashBoard';

function App() {
  const navigate=useNavigate()
  useEffect(()=>{
    const loginToggle = JSON.parse(localStorage.getItem("login"))
    if(loginToggle){
      navigate('/dashboard')
    }else{
      navigate("/")
    }
  },[])
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Form/>} exact></Route>
        <Route path='/login' element={<Form/>} exact></Route>
        <Route path='/dashboard' element={<DashBoard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
