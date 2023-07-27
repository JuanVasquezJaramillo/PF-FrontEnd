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
import Footer from "./components/footer";
axios.defaults.baseURL = "https://deploy-back-production-e46b.up.railway.app/";
import { CloudinaryContext } from "cloudinary-react";
import { useAuth } from "./context/authContext";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state=> state.user.user)

  const auth = useAuth();
 

  return (
    <>
      <CloudinaryContext cloudName="dou3yyisb">
        <Navbar />
        <Routes>
          {/* rutas publicas */}

          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={!auth.user  ?<LoginPage/>:<RegisterPage/>}/>

          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route path="/nosotros" element={<AboutUs />} />

          {/* rutas privadas */}
          <Route
            path="/profile"
            element={ <UserProfile /> }
          />
          <Route
            path="/trainingnew"
            element={ <TrainingNew /> }
          />
          <Route
            path="/paycheck"
            element={ <Pay /> }
          />
          <Route
            path="/alternativeProfile/:idUser"
            element={  <ViewProfile />}
          />
          <Route
            path="/alternativeDetail/:id"
            element={ <Detail /> }
          />
          <Route
            path="/IdDetailsTraining/:id"
            element={ <IdDetailsTraining /> 
            }
          />
        </Routes>
        <Footer />
      </CloudinaryContext>
    </>
  );
}

export default App;
