import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import UserProfile from "./components/userProfile";
import TrainingDetail from "./components/TrainingDetail";
import TrainingNew from "./components/TrainingNew";
import AboutUs from "./pages/AboutUs";
import Market from "./pages/Pasarela/market";
import ViewProfile from "./components/vistaPerfil/viewProfile";
import { AuthProvider } from "./context/authContext";
import axios from "axios";
import Detail from "./components/alternativeDetail";
import IdDetailsTraining from "./components/IdDetailsTraining";
import Cart from "./components/Carrito/Cart";
axios.defaults.baseURL = "http://localhost:5000"

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="/trainingnew" element={<TrainingNew />} />
          <Route path="/training/:idPlan" element={<TrainingDetail />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path='/paycheck' element={<Market/>}/>
          <Route path="/alternativeProfile" element={<ViewProfile/>}/>
          <Route path="/alternativeDetail/:id" element={<Detail/>}/>
          <Route path="/IdDetailsTraining/:id" element={<IdDetailsTraining/>}/>  
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
