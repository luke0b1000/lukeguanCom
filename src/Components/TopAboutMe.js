import React, { Component } from 'react';
import light_saber from '../assets/light_saber.png';

class TopAboutMe extends Component {
    render() {
        return (
            <div className="about-me-short">
                <p>
                    Welcome, my name is Luke.
                    <img src={light_saber} alt="light_saber" />
                </p>
                <p>
                    I'm a developer based in New York City. My focus is with
                    React and AWS.
                </p>
                <p>Feel free to take a look at my latest projects.</p>
            </div>
        );
    }
}
export default TopAboutMe;
