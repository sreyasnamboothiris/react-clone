
import './App.css';
import Home from './pages/Home/Home';
import { Routes,Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if(user){
        navigate('/');
      }else{
        console.log('logied out')
        navigate('/login');
      }
    })
  },[])

  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
      
    </div>
  );
}

export default App;



