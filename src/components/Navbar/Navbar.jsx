import React, { useEffect,useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'



function Navbar() {

  const navRef = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      if(navRef.current){
        if (window.scrollY >= 80) {
          console.log(window.scroll)
          navRef.current.classList.add('nav-dark');
        } else {
          console.log(window.scrollY)
          navRef.current.classList.remove('nav-dark');
        }
      }
        
      
    };
    window.addEventListener('scroll', handleScroll);
  
  },[]);

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv shows</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse by language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt='' className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="not loading" className='icons' />
      <div className="navbar-profile">
        <img src={profile_icon} alt="" className="profile" />
        <img src={caret_icon} alt="" className="profile" />
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign Out of netflix</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
