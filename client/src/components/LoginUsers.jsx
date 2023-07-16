import { useDispatch } from "react-redux";
import { useAuth } from "../context/authContext";
import { signin } from "../global/userSlice";
import style from "../modules/loginUsers.module.css";
import { useState } from "react";

const LoginUsers = () => {
  const auth = useAuth();
  const { displayName } = auth.user;
  console.log(displayName);

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  // register with mail
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   auth.register(inputs.email, inputs.password)
  // }

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(inputs.email, inputs.password);
    dispatch(signin());
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
    dispatch(signin());
  };
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleLogin}>
        <h2 className={style.titleForm}>Sign in</h2>
        <input
          autoFocus
          autoComplete="true"
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="example@example.com"
          className={style.input}
        />
        <input
          autoComplete="true"
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          placeholder="********"
          className={style.input}
        />
        <button type="submit" className={style.Link}>
          sign in
        </button>
        <button onClick={(e) => handleGoogle(e)} className={style.button}>
          sign in for google
        </button>
      </form>
    </div>
  );
};

export default LoginUsers;
