import React from "react";

const Intro = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center px-10 md:min-h-60h">
            <div className="m-auto w-100 md:w-70 lg:w-50">
                <h2 className="text-4xl text-[#5C00FB] font-black mb-5"><i>Fast and simple.</i></h2>
                <p> 
                This weather application was made with the intention of giving weather data in it's simplest form.
                it only delivers what most people want to know in a hurry! That being the temperature, rain chance,
                humidity, wind speed, and cloud cover. That's it. It also delivers up-to-date news stories. With this app, you'll be in the loop. 
                </p>
            </div>
        </div>
    )
}

export default Intro