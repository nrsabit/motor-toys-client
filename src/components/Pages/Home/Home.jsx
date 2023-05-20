import React from 'react';
import Banner from './Banner';
import Galary from './Galary';
import TabsCategory from './TabsCategory';
import TopToys from './TopToys';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <Galary></Galary>
            <TabsCategory></TabsCategory>
            <TopToys></TopToys>
        </div>
    );
};

export default Home;