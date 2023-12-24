import React from 'react'
import facebook from '../assets/f.svg';
import twitter from '../assets/t.svg'
import instagram from '../assets/ins.svg';
import logo from '../assets/Logo.svg';
import ins from '../assets/in.svg'

function Footer() {
  return (
    <React.Fragment>
        <div className="footer">
            <div className="container">
                <div className="footer__info">
                    <div className="footer__logo">
                        <img src={logo} alt="" />
                        <div className="icon">
                            <a href="#!"><img src={facebook} alt="" /></a>
                            <a href="#!"><img src={twitter} alt="" /></a>
                            <a href="#!"><img src={ins} alt="" /></a>
                            <a href="#!"><img src={instagram} alt="" /></a>
                        </div>
                    </div>
                    <ul className='footer__list'>
                        <li><a className='footer__link' href="">Voice over and Subtitle</a></li>
                        <li><a className='footer__link' href="">Media Center</a></li>
                        <li><a className='footer__link' href="">Privacy</a></li>
                        <li><a className='footer__link' href="">Contact us</a></li>
                    </ul>
                    <ul className='footer__list'>
                        <li><a className='footer__link' href="">Voice Description</a></li>
                        <li><a className='footer__link' href="">Investor Relations</a></li>
                        <li><a  className='footer__link'href="">Legal Provisions</a></li>
                        
                    </ul>
                    <ul className='footer__list'>
                        <li><a className='footer__link' href="">Help Center</a></li>
                        <li><a className='footer__link' href="">Opportunities</a></li>
                        <li><a className='footer__link' href="">Cookies Preferences</a></li>
                        
                    </ul>
                    <ul className='footer__list'>
                        <li><a className='footer__link' href="">Gift Cards</a></li>
                        <li><a className='footer__link' href="">Terms of Use </a></li>
                        <li><a className='footer__link' href="">Corporate Informations</a></li>

                    </ul>
                </div>
            </div>
        </div>

    </React.Fragment>
  )
}

export default Footer