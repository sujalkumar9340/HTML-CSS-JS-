import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Er from './component/Er'
import Nav from './component/Nav'


function App() {
  return (
    <>
      <h1>hellow</h1>
      <Nav/>
   
      {/* <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={logo} className="logoimg" alt="" />
          </div>
          <div className="col-lg-6">
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pretium arcu a nisl ultrices sollicitudin. Quisque
              rutrum neque at ipsum ultricies luctus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Nulla ac porta sapien, eget faucibus nibh. Mauris risus purus,
              bibendum a nisi non, malesuada tristique enim. Donec a ligula
              eleifend, gravida mauris et, posuere mauris. Quisque a tempus
              diam. In lacinia non massa eu aliquet. Donec porta, velit sit amet
              auctor iaculis, lacus nunc convallis nulla, id gravida massa urna
              vel turpis. In pretium magna dui, ac tempus dolor eleifend non.
              Nam erat sem, viverra eu fermentum at, fermentum nec orci.
              Suspendisse potenti. Nam sed porta dui. Sed sit amet felis
              iaculis, commodo diam quis, facilisis ligula. Vivamus laoreet
              fringilla suscipit. Aliquam erat volutpat.
            </p>
          </div>
        </div>
        <div className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-logo">
                  <img src={logo} alt="" />
                  <div className="companyname">
                   react js
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
   <Er/>
   
    </>
  );
}

export default App;
