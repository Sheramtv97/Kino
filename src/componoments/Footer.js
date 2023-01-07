import React from 'react';
import LOGO from '../img/Company_logo.svg'
import {Link, NavLink} from "react-router-dom";


const Footer = () => {
    return (
        <>
            <div id='footer'>
                <div className='container'>
                    <div className='footer'>
                        <div className='footer--logo'>
                            <Link to={'/'}>
                                <img src={LOGO} alt=""/>
                            </Link>

                            <button>Вступит нашу Группу</button>

                        </div>

                        <div className="footer--nav">
                            <div className='footer--nav__title'>
                                <NavLink to ={'/'}>Меню</NavLink>
                                <NavLink to ={'/films'}>Фильмы</NavLink>
                                <a href="#">Связаться с нами</a>
                                <a href="#">Форумы поддержки</a>
                                <a href="#">Статус системы</a>
                            </div>

                            <div className='footer--nav__see'>
                                <NavLink to ={'/meat'}>Рекламы</NavLink>
                                <NavLink to ={'/support'}>Отзывы</NavLink>
                                <a href="#">Добавить новый фильм</a>
                                <a href="#">Добавить новый сериал</a>
                                <a href="#">Руководства</a>
                            </div>

                            <div className='footer--nav__inp'>
                                <div className='footer--nav__inp--put'>
                                    <input type="text" placeholder=' Ваше имя'/>
                                    <input type="number" placeholder=' Номер Тел'/>
                                </div>

                                <div className='footer--nav__inp--otzyv'>
                                    <input type="text" placeholder='Ваш отзыв'/>
                                </div>

                                <div className='footer--nav__inp--btn'>
                                    <button>Отправить</button>
                                </div>
                               
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>

    );
};


export default Footer;