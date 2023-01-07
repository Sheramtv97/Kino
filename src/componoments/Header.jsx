import React, {useContext, useRef, useState} from 'react';
import LOGO from "../img/Company_logo.svg"
import {Link, NavLink, useNavigate} from "react-router-dom";
import {languageContext} from "../context";
import {BsFillMoonFill} from "react-icons/bs";
import {GrSolaris} from "react-icons/gr";


const Header = () => {


    const navigate = useNavigate()

    const [value,setValue] = useState('')

    const input = useRef(null)

    const handleClick = (name) =>{
        if (value !== ''){
            navigate(`/movie/search-result/${name}`)
        }
        input.current.value = ''
    }

    const {setLanguage} = useContext(languageContext)

    const changeLanguage = (e) => setLanguage(e.target.value)

    // const [node,setNode] = useState(JSON.parse(localStorage.getItem('node') || false))

    // const sH = () =>{
    //     chanGhe(node)
    //     setNode(!node)
    // }

    return (
       <div id="header">
           <div className="container">
               <div className="header">
                   <div className="header-logo">
                       <Link to={'/'}>
                           <img src={LOGO} alt=""/>
                       </Link>
                   </div>
                   <div className='search-movie'>
                       <input onChange={(e) => setValue(e.target.value)} ref={input} type='search'/>
                       <button onClick={() =>handleClick(value)}>search</button>
                   </div>

                  <div className="right-side">
                      <div className="header-nav">
                          <NavLink to ={'/'}>Меню</NavLink>
                          <NavLink to ={'/films'}>Фильмы</NavLink>
                          <NavLink to ={'/meat'}>Рекламы</NavLink>
                          <NavLink to ={'/support'}>Отзывы</NavLink>
                      </div>


                      <div className="header-btn">

                          {/*<button onClick={() => sH(node)} className="dark-mode" style={{*/}
                          {/*    background: node ? "white" : '',*/}
                          {/*    color: node ? "#2a2828" : '',*/}
                          {/*}}>{node ? "НочЬ" : "ДенЬ"}</button>*/}
                          {/*<input type="radio" />*/}
                          {/*{*/}
                          {/*    input ?  : <GrSolaris/>*/}
                          {/*}*/}

                          <button className='but'> <BsFillMoonFill style={{color: 'white'}}/>
                          </button>

                          <button className='btn'>Sign in</button>
                      </div>

                      <select className="select-name" name="" id="" onChange={changeLanguage}>
                          <option className="select-name_option" value="en-US">EN</option>
                          <option className="select-name_option" value="ru-RU">РУ</option>
                      </select>

                  </div>
               </div>
           </div>
       </div>
    );
};

export default Header;