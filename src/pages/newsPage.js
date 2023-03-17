import React, { useEffect, useState, useRef }from "react";
import Hero from '../containers/hero';
import NewsExpanded from '../containers/newsExpanded';
import skyline from '../images/skyline.jpg';
// only holds news stories from the newsExpanded component

const NewsPage = () => {

    const font = {color: '#fff', textShadow: '2px 2px 2px #000'}
    const background = {backgroundImage: `url(${skyline})`}

    return (
        <div>
            <Hero title="News" background={background} font={font}/>
            <NewsExpanded />
        </div>
    )
}

export default NewsPage