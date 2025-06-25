import React, { useEffect } from 'react';
import storm from '../images/stormCloud.png'

// hero should recieve props depending on the page it's on! dynamic text and whatnot
const Hero = (props) => {

    return (
        <div id="hero" style={props.background} className="flex flex-col justify-center min-h-64 bg-fixed bg-cover bg-bottom px-20 lg:min-h-60h">
            <h1 style={props.font} className="text-5xl md:6xl lg:text-7xl font-bold text-white text-center mb-2"> {props.title} </h1>
            {/* <p style={props.font} className="text-1xl font-bold text-center"> {props.desc} </p> */}
        </div>
    )
}

export default Hero;