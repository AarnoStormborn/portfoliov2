import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  
  const offcanvasHeader = {
    borderBottom: '1px solid gray' ,
    justifyContent: 'space-around'
  }

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [navbarHidden, setNavbarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setNavbarHidden(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
     <nav className="navbar fixed-top" style={navbarHidden?{}:{display:'none'}}>
      <div className="container-fluid mx-5 px-5">
        <Link className="navbar-brand" to="/" onClick={handleClick}>
          <img src="images/apple-touch-icon.png" alt="" width={35} height={35} className="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
         aria-controls="offcanvasNavbar">
          <i className="fa-solid fa-bars"></i> 
        </button>
        <div className="offcanvas offcanvas-start offcanvas-size-md" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header" style={offcanvasHeader} data-bs-dismiss="offcanvas">
            <img src="images/apple-touch-icon.png" alt="" width={50} height={50} className="nav-logo" />
          </div>
          <div className="offcanvas-body ms-1" data-bs-dismiss="offcanvas">
            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
              <li className="nav-item mt-2 ms-2">
                <Link className="nav-link active" aria-current="page" to="/" onClick={handleClick}>
                  <i className="fa-solid fa-house p-1"></i>
                  <span className="ms-2">Home</span>
                </Link>
              </li>
              <li className="nav-item mt-2 ms-2">
                <Link className="nav-link active" to="/profile" onClick={handleClick}>
                  <i className="fa-solid fa-user p-1"></i>
                  <span className="ms-2">Profile</span>
                </Link>
              </li>
              <li className="nav-item mt-2 ms-2">
                <Link className="nav-link active" to="/projects" onClick={handleClick}>
                  <i className="fa-solid fa-diagram-project p-1"></i>
                  <span className="ms-2">Projects</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="offcanvas-footer">
            <div className="d-flex justify-content-center mb-5">
              <div className="nav-icon">
                <a className="navbar-brand" href="https://github.com/AarnoStormborn" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="nav-icon">
                <a className="navbar-brand" href="https://www.linkedin.com/in/harsh-singh-4428241b4/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a> 
              </div>
              <div className="nav-icon">
                <a className="navbar-brand" href="https://www.kaggle.com/harshsingh2209" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-kaggle"></i>
                </a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

