import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/login'>Sign in</NavLink>
      <NavLink to='/register'>Sign up</NavLink>
    </nav>
  );
}