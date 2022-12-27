import {BiMenu} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'
import { IconConfig2 } from './IconConfig2'
import {useRef} from 'react'


let logo = require('../images/logo.jfif')

export const Navbar = () => {

  const navRef = useRef<HTMLUListElement | null>(null)

  const showNavbar = () => {
    // navRef.current.classList.toggle('responsive')
    navRef.current?.classList.toggle('responsive')
  }

  return(
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul ref={navRef}>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Drifters</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <button className='menu-btn close' onClick={showNavbar}><IconConfig2><MdClose/></IconConfig2></button>
        </ul>
      </nav>
      <button className='learn-drift'>LearnDrift</button>
      <button className='menu-btn' onClick={showNavbar}><IconConfig2><BiMenu/></IconConfig2></button>
    </div>
  )
}