import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sidebar">Sidebar</Link></li>
        <li><Link to="/login-form">Login form</Link></li>
        <li><Link to="/analog-clock">Analog clock</Link></li>
      </nav>
    </>
  )
}