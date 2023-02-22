import React, {useState} from 'react';
import {BsQuestionSquare, BsSearch} from "react-icons/bs";
import {SlBasket} from "react-icons/sl";
import {MdOutlinePersonSearch} from "react-icons/md";
import {NavLink} from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";


const Header = () => {
    const [nav, setNav] = useState(false);
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <div onClick={() => setNav(!nav)} className='header--menu'>
                        <div className="header--menu__bg1"></div>
                        <div className="header--menu__bg2"></div>
                        <div className="header--menu__bg3"></div>
                    </div>
                    <NavLink to={'/'}>
                        <h1>MOTION <span>SHOP</span></h1>
                    </NavLink>
                    <div className="header--input">
                        <input type="text" placeholder="я ищу..." color='white'/>
                        <BsSearch className="header--input__icon"/>
                    </div>
                    <div className={nav ? 'menu' : 'header--icon'} onClick={() => setNav(false)}>
                        <div className="header--icon__img">
                            <BsQuestionSquare color='white' className='header--icon__img--bg'/>
                            <NavLink to={'/faq'}>FAQ</NavLink>
                        </div>
                        <div className="header--icon__img">
                            <MdOutlinePersonSearch color='white' className='header--icon__img--bg'/>
                            <NavLink to={''}>О нас</NavLink>
                        </div>
                        <div className="header--icon__img">
                            <SlBasket color='white' className='header--icon__img--bg'/>
                            <NavLink to={''}>Корзина</NavLink>
                        </div>
                    </div>

                    <div className="header--kor">
                        <SlBasket color={'rgba(209, 24, 168, 1)'}/>
                    </div>
                </div>
            </div>
        </header>

    );
};
export default Header;