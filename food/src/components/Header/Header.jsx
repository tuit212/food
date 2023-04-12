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
            <Link className='links'>Dinning option</Link>
            <div className="data">
                <p><span>10:53:00</span>   <span>26/02/2023</span></p>
            </div>
            <div className="acound">
                <img src="https://images.pexels.com/photos/15445847/pexels-photo-15445847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header