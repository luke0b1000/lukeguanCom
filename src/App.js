import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import TopAboutMe from './Components/TopAboutMe';
import SocialIcons from './Components/SocialIcons';
import MyProjects from './Components/MyProjects';
import BottomAboutMe from './Components/BottomAboutMe';
import Certification from './Components/Certification';
import Footer from './Components/Footer';

class App extends Component {
    render() {
        return (
            <main>
                <div className="grid-page">
                    <NavBar />
                    <TopAboutMe />
                    <SocialIcons />
                    <MyProjects />
                    <BottomAboutMe />
                    <Certification />
                    <Footer />
                </div>
            </main>
        );
    }
}

export default App;
