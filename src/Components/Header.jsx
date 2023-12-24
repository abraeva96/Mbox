import React from 'react';
import logo from '../assets/Logo.svg';
import navIcon from '../assets/icon.svg';
import headerImg from '../assets/header.img.png';

import star from '../assets/star.svg';
// import play from '../assets/play.svg'

function Header({ links }) {
    return (
        <React.Fragment>
            <div className="nav">
                <div className="container">
                    <div className="nav__box">
                        <a href='#!'>
                            <img src={logo} alt="" />
                        </a>

                        <ul className='nav__list'>
                            {
                                links.map((list, i) => {
                                    // console.log(list.name);
                                    return (
                                        <li  key={i}>
                                            <a href={list.link} className='nav__link'><span className='span'>{list.name}</span></a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <a href="#!"><img src={navIcon} alt="" /></a>

                    </div>
                    <div className='header__img' style={{ background: `url(${headerImg})no-repeat center /cover` }}>
                        <div className="header__info">
                            <h1>Night Watch</h1>
                            <div  className='info'>
                                <p className="info__text">2021</p>
                                <p className="info__text">18+</p>
                                <p className="info__text">9 Seasons</p>
                                <p className="info__text">
                                    <span className='star'>
                                        <img src={star} alt="" />
                                    </span>
                                    8.8
                                </p>
                            </div>
                            <p className='head__txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc quis et elit lacinia urna.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.</p>
                                <div className='btn'>
                                    <button >Watch</button>
                                    <button>More information</button>
                                </div>
                        </div>

                    </div>
                            <div className='line'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header