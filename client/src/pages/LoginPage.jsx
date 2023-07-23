import { useState } from "react";
// import LoginUsers from "../components/LoginUsers";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";
import style from "../modules/loginUsers.module.css";

export default function LoginPage() {

  const [register, setRegister] = useState('login')

  return (
    <div className={style.container}>
      {register == 'login'? (
        <>
          <LoginForm setRegister={setRegister} />
        </>
      ): (
        <>
          <RegisterForm setRegister={setRegister} />
        </>
      )}
    </div>
  );
}
