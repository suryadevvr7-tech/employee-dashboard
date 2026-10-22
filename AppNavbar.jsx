import { NavLink } from "react-router-dom";

function AppNavbar() {
  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active fw-semibold" : "");

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Employee Portal
        </NavLink>
        <ul className="navbar-nav ms-auto flex-row gap-3">
          <li className="nav-item">
            <NavLink className={linkClass} to="/" end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={linkClass} to="/employee-form">
              Employee Form
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AppNavbar;
