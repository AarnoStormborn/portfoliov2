import { Link } from 'react-scroll';
import '../styles/navbar.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Navbar() {

  const handleClick = () => {
    window.scrollTo(0, 70);
  };

  const homeOffset = -250
  const [aboutOffset, setAboutOffset] = useState(0)
  const [skillsOffset, setSkillsOffset] = useState(0)
  const [projectsOffset, setProjectsOffset] = useState(-90)
  const [contactOffset, setContactOffset] = useState(0)

  useEffect (() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setAboutOffset(-270)
        setSkillsOffset(-100)
        setProjectsOffset(-225)
        setContactOffset(-200)
      } else if (window.innerWidth <= 768) {
        setAboutOffset(-225)
        setSkillsOffset(-100)
        setProjectsOffset(-225)
        setContactOffset(-200)
      } else {
        setAboutOffset(0)
        setSkillsOffset(0)
        setProjectsOffset(-90)
        setContactOffset(0)
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })


  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom border-body sticky-top">
        <div className="container-fluid ms-5">
          <Link className="navbar-brand mx-3 nav-logo" to="/" onClick={handleClick}>
            <img src="images/apple-touch-icon.png" alt="" width={40} height={40} className="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="home" spy={true} smooth={true} offset={homeOffset} duration={500} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                  <i className="fa-solid fa-house p-1"></i>
                  <span className="ms-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" spy={true} smooth={true} offset={aboutOffset} duration={500} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                  <i className="fa-solid fa-user p-1"></i>
                  <span className="ms-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="skills" spy={true} smooth={true} offset={skillsOffset} duration={500} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                  <i className="fa-solid fa-pen-fancy p-1"></i>
                  <span className="ms-2">Skills</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="projects" spy={true} smooth={true} offset={projectsOffset} duration={500} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                  <i className="fa-solid fa-diagram-project p-1"></i>
                  <span className="ms-2">Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact" spy={true} smooth={true} offset={contactOffset} duration={500} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                  <i class="fa-solid fa-envelope p-1"></i>
                  <span className="ms-2">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}