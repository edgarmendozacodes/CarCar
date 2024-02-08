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
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"> Inventory </a>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/automobiles/list/"> Automobile List</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/automobiles/create/"> Add Automobile </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/manufacturers/"> Manufacturer List</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/manufacturers/new/"> Add Manufacturer </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/models/"> Model List</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/models/new/"> Add Model </NavLink></li>
                            </ul>
                    </li>
                    <li className="nav-item-dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"> Sales </a>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="salesperson/create/"> Add Sales Person </NavLink></li>
                                <li><NavLink className="dropdown-item" to="customer/list/"> List Customers </NavLink></li>
                                <li><NavLink className="dropdown-item" to="customer/create/"> Add Customer </NavLink></li>
                                <li><NavLink className="dropdown-item" to="sales/create/"> Create Sales Record </NavLink></li>
                                <li><NavLink className="dropdown-item" to="sales/list/"> All Sales </NavLink></li>
                                <li><NavLink className="dropdown-item" to="sales/history/"> Sales by Person </NavLink></li>
                            </ul>
                    </li>
                    <li className="nav-item-dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"> Service </a>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/service/appointments/"> Appointments </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/service/appointments/new/"> Add Appointment </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/service/technicians/"> Technicians </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/service/technicians/new/"> Add Technician </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/service/history/">Service History</NavLink></li>
                            </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav;
