import React from 'react';
import Navigation from '../components/Navigations';
import Logo from '../components/Logo';
import Countries from '../components/Countries';

const Home = () => {
    return (
        <div className="home">
            <Logo />
            <Navigation />
            <Countries />
        </div>
    )
}

export default Home;