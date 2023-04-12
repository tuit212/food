import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './Header.scss'
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header>
        <div className='logos'>
            <div className="header__back">
                <AiOutlineArrowLeft className='icon'/>
            </div>
            <div className="line"></div>
            <div className="header__logo">
                <Link className='logo'>
                    <img src={logo} alt="logo" />
                    <div>
                        <h3>Walk-In</h3>
                        <p>Coca coffeetalk</p>
                    </div>
                </Link>
            </div>
        </div>
        <div className="navbar">
            <Navbar/>
        </div>
    </header>
  )
}

export default Header