import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItems = (props) => {
    return (
        <li className={s.item + ' ' + s.active}>
            <img className={s.avatar} src="https://s4.cdn.teleprogramma.pro/wp-content/uploads/2020/01/e187d44f997b399185adaf352cc17b83.jpg" alt="" />
           <div>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </li>
    )
}

export default DialogItems;