import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import UserProfile from "./components/userProfile";
import TrainingNew from "./components/TrainingNew";
import AboutUs from "./pages/AboutUs";
import Pay from "./pages/Pasarela/payPage";
import ViewProfile from "./components/vistaPerfil/viewProfile";
import axios from "axios";
import Detail from "./components/alternativeDetail";
import IdDetailsTraining from "./components/IdDetailsTraining";

axios.defaults.baseURL = "http://localhost:5000";
import { CloudinaryContext } from "cloudinary-react";
import { useAuth } from "./context/authContext";

function App() {
  const auth = useAuth();

  return (
    <>
      <CloudinaryContext cloudName="dou3yyisb">
        <Navbar />
        <Routes>
          {/* rutas publicas */}
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={!auth.user?<LoginPage/>:<RegisterPage/>}/>
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route path="/nosotros" element={<AboutUs />}/>

          {/* rutas privadas */}
          <Route
            path="/profile"
            element={auth.user ? <UserProfile /> : <LoginPage />}
          />
          <Route
            path="/trainingnew"
            element={auth.user ? <TrainingNew /> : <LoginPage />}
          />
          <Route
            path="/paycheck"
            element={auth.user ? <Pay /> : <LoginPage />}
          />
          <Route
            path="/alternativeProfile/:idUser"
            element={auth.user ? <ViewProfile /> : <alternativeProfile />}
          />
          <Route
            path="/alternativeDetail/:id"
            element={auth.user ? <Detail /> : <LoginPage />}
          />
          <Route
            path="/IdDetailsTraining/:id"
            element={
              auth.useAuth ? <IdDetailsTraining /> : <IdDetailsTraining />
            }
          />
        </Routes>
      </CloudinaryContext>
    </>
  );
}

export default App;
