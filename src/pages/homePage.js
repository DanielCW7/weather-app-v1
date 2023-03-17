import React, { useEffect } from 'react';
import Forecast from '../containers/forecast';
import News from '../containers/news';
import sunset from '../images/sunset.webp'

const Home = () => {

    const font = {color: '#fff', textShadow: '2px 2px 2px #000'}
    const background = {backgroundImage: `url(${sunset})`}

    return (
        <div>
            <Forecast />
            <News />
        </div>
    )
}

export default Home