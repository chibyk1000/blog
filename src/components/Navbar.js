import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const navLinks = [{title:'Home', path: "/"}, {title:'Add Blog', path:"/add-blog"}, {title:'About', path:"/about"}]

  return (
      <nav>
          <a href="" className='logo' ><img src="/logo192.png" alt="" /></a>
          <ul>
              {
                  navLinks.map((link) => {
                      return (
                          <li key={link.title}><Link to={link.path}>{link.title }</Link></li>
                      )
                  })
              }
             
            
          </ul>
    </nav>
  )
}

export default Navbar