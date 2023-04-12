import React from 'react' 
import { NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav>
        <NavLink className='link' to='/' >
            <AiFillHome className='icon'/>
            <span>Home</span>
        </NavLink>
        <NavLink className='link' to='/order' >
            <AiFillHome className='icon'/>
            <span>Order</span>
        </NavLink>
        <NavLink className='link' to='/history' >
            <AiFillHome className='icon'/>
            <span>History</span>
        </NavLink>
        <NavLink className='link' to='/bills' >
            <AiFillHome className='icon'/>
            <span>Bills</span>
        </NavLink>
    </nav>
  )
}

export default Navbar