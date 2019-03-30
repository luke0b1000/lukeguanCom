import React, { Component } from 'react';

class SocialIcons extends Component {
    render() {
        return (
            <div className="icons-me">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/luke0b1000"
                    className="github-icon"
                >
                    <i className="fab fa-github fa-w-16 fa-2x" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/lukeguan"
                    className="twitter-icon"
                >
                    <i className="fab fa-twitter fa-w16 fa-2x" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in"
                    className="linkedin-icon"
                >
                    <i className="fab fa-linkedin fa-w-16 fa-2x" />
                </a>
            </div>
        );
    }
}

export default SocialIcons;
