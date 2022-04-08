import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/movie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Flick and Chill</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="https://www.themoviedb.org/">Home</Link>
                        {/* <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link> */}
                        <Link to="https://www.themoviedb.org/">About us</Link>
                    </div>
                    <div className="footer__content__menu">
                        {/* <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Privacy policy</Link> */}
                    </div>
                    <div className="footer__content__menu">
                        {/* <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link> */}
                        <Link to="https://www.youtube.com/watch?v=ntYXj9W1Ez8&t=328s">I remade this from watching this tutorial</Link>
                        <h4> © Credit goes to: Youtube Creator by Tran Anh Tuat   </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
