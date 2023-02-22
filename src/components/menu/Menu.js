import React from 'react';
import {BsQuestionSquare} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {MdOutlinePersonSearch} from "react-icons/md";
import {SlBasket} from "react-icons/sl";

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu--name">
                <BsQuestionSquare color='white' className='header--icon__img--bg'/>
                <NavLink to={''}>FAQ</NavLink>
            </div>
            <div className="menu--name">
                <MdOutlinePersonSearch color='white' className='header--icon__img--bg'/>
                <NavLink to={''}>О нас</NavLink>
            </div>
            <div className="menu--name">
                <SlBasket color='white' className='header--icon__img--bg'/>
                <NavLink to={''}>Корзина</NavLink>
            </div>

        </div>
    );
};

export default Menu;