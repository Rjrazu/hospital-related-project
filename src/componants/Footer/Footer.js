import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Commitment School and College</h1>
                                <p className="mt-4 ">
                                    <small>
                                        Come For Knowledge And Go Out For Services!
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>CSC © . All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Quick Path</li>

                                    <li className="footer-menu"><NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "cyan",
                                            fontSize: "18px"
                                        }}
                                        to="./home"
                                    >Home</NavLink></li>

                                    <li className="footer-menu"><NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "cyan",
                                            fontSize: "18px"
                                        }}
                                        to="./services"
                                    >Services</NavLink></li>

                                    <li className="footer-menu"><NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "cyan",
                                            fontSize: "18px"
                                        }}
                                        to="./contact"
                                    >Contact Us</NavLink></li>

                                    <li className="footer-menu"><NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "cyan",
                                            fontSize: "18px"
                                        }}
                                        to="./about"
                                    >About Us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">

                                    </div>
                                    <div>
                                        <p>
                                            Anondo Bajar
                                            <br /> Rowmari, Kurigram-4, Rangpur
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;