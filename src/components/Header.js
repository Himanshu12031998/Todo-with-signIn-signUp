import React from "react";
import { Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/Main.css";
import NavDropdown from "react-bootstrap/NavDropdown";



const Header = ({ onToggleSidebar }) => {
 const navigate =useNavigate()
    const handleLogout=()=>{
      localStorage.clear();
      
  }
  
  return (
    <header className="header">
      <nav className="navbar navbar-dark bg-dark nav-bar">
        <div className="d-flex align-items-center">
          {/* <button className="navbar-toggler" type="button" onClick={onToggleSidebar}>
          <span className="navbar-toggler-icon"></span>
        </button> */}
          <Navbar.Brand className="ms-3"> <h4>Todo</h4></Navbar.Brand>
        </div>
        <div className="d-flex header-profile-container">
          <span className="cursor-pointer fs-6 text-white user-icon">
            <FaUser />
          </span>
          <NavDropdown
            title={JSON.parse(localStorage.getItem("user")).name}
            id="basic-nav-dropdown"
            className="header-profile"
          >
            <NavDropdown.Item>{JSON.parse(localStorage.getItem("user")).email}</NavDropdown.Item>
          
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to={'/'} onClick={handleLogout} style={{textDecoration:"none", color:"black"}}>Logout</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </nav>
    </header>
  );
};

export default Header;
