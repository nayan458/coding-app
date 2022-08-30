import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Error from './pages/Error';
// import BouncingBall from './layouts/BouncingBall';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import User from './pages/User';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/usr" element={<User/>} />
        <Route path="/Error" element={<Error/>} />
        <Route path="/*" element={<Error/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
