import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import UserProfile from './components/userProfile'
import TrainingDetail from './components/TrainingDetail';
import TrainingNew from './components/TrainingNew';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='profile' element={<UserProfile/>} />
        <Route path='/trainingnew' element={<TrainingNew />} />
        <Route path='/training' element={<TrainingDetail />} />
      
      </Routes>
    </>
  )
}

export default App
