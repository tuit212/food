import React from 'react' 
import { NavLink } from 'react-router-dom'
import { CiCoffeeCup } from 'react-icons/ci';
import { FaGlassCheers } from 'react-icons/fa';
import './Article.scss'

const Article = () => {
  return (
    <article>
        <NavLink to='/' className='link'>
            <CiCoffeeCup className='icon'/>
            <p>Coffee</p>
        </NavLink>
        <NavLink to='/Beverages' className='link'>
            <FaGlassCheers className='icon'/>
            <p>Beverages</p>
        </NavLink>
        <NavLink to='/' className='link'>
            <CiCoffeeCup className='icon'/>
            <p>Coffee</p>
        </NavLink>
        <NavLink to='/' className='link'>
            <CiCoffeeCup className='icon'/>
            <p>Coffee</p>
        </NavLink>
        <NavLink to='/' className='link'>
            <CiCoffeeCup className='icon'/>
            <p>Coffee</p>
        </NavLink>
        <NavLink to='/' className='link'>
            <CiCoffeeCup className='icon'/>
            <p>Coffee</p>
        </NavLink>
    </article>
  )
}

export default Article