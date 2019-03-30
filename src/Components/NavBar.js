import React, { Component } from 'react';

import lukeguan_barcode from '../assets/lukeguan_barcode.png';

class NavBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <nav>
                    <ul className="top-bar-section">
                        <li className="main_logo">
                            <a href="https://lukeguan.com">
                                <div>
                                    <img
                                        src={lukeguan_barcode}
                                        alt="lukeguan_barcode"
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="nav-links">
                            <a href="https://lukeguan.com">Home</a>
                        </li>
                        <li className="nav-links">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="nav-links">
                            <a href="#aboutme">About Me</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;
