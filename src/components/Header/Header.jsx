import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    
    return (
        
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png' alt='logo'></img>
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