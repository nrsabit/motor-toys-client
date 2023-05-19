import React from 'react';
import Banner from './Banner';
import Galary from './Galary';
import Tabs from './Tabs';
import TopToys from './TopToys';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <Galary></Galary>
            <Tabs></Tabs>
            <TopToys></TopToys>
        </div>
    );
};

export default Home;