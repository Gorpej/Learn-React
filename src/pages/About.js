import React from 'react';
import Navigation from '../components/Navigations';
import Logo from '../components/Logo';

const About = () => {
    return (
        <div className="about">
            <Logo />
            <Navigation />
            <br/>
            <p>A propos du site
            </p>
        </div>
    )
}

export default About;