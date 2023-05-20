import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import useTitle from '../../Hook/useTitle';
import ShortProducts from './ShortProducts/ShortProducts';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner />
            <ShortProducts />
            <About />
            <Gallery />
        </div>
    );
};

export default Home;