import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo512.png'


const Header = (props) => {
    
    return (
        
        <header className={s.header}>
            <img src={logo} alt='logo'></img>
            <div className={s.titllelogin}>
                {props.isAuth 
                    ? <div> <NavLink to='/login'>{props.login}</NavLink> - <button onClick={props.logout}>
                        Log out</button>  </div>
                    : <NavLink to='/login'>Login</NavLink>}


            </div>
        </header>
    )
}

export default Header;