import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }

  }


  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            
            <img src ="/images/logo192.png" className="logo-image" alt=''/>
          </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? "fa-solid fa-times" : "fa-solid fa-bars"} className='menu-icons'/>
        </div>
        <ul className={click ? 'nav-menu active': 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/robotics' className='nav-links' onClick={closeMobileMenu}>
              Robotics
            </Link>
          </li>

        </ul>

        {button && <Button buttonStyle="btn--outline">Contact</Button>}


      </nav>
    </>
  )
}

export default Navbar