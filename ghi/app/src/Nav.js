import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item-dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"> Automobiles </a>
                      <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="/automobiles/list/"> Automobile List</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/automobiles/create/"> Add Automobile </NavLink></li>
                      </ul>
              </li>

          <li className="nav-item">
              <NavLink className="nav-link" to="manufacturers">Manufacturers</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="manufacturers/new">Create a Manufacturer</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" to="models">Models</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="models/new">Create a Model</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="technicians">Technicians</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="technicians/new">Create a Technician</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="appointments/new">Create an Appointment</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="appointments">Appointments</NavLink>
          </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Nav;
