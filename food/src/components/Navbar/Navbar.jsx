import React from 'react' 
import { NavLink } from 'react-router-dom'
import { AiFillHome ,  AiOutlineHistory} from 'react-icons/ai';
import { HiOutlineClipboardList } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav>
        <NavLink className='link' to='/' >
            <AiFillHome className='icon'/>
            <span>Home</span>
        </NavLink>
        <NavLink className='link' to='/order' >
            <HiOutlineClipboardList className='icon'/>
            <span>Order</span>
        </NavLink>
        <NavLink className='link' to='/history' >
            <AiOutlineHistory className='icon'/>
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