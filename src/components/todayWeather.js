import React, { useEffect, useRef }from "react";
import cloud from '../images/cloud.png';
import partiallyCloudy from '../images/partiallyCloudy.png';
import rainy from '../images/rainy.png';
import snow from '../images/snow.png';
import sun from '../images/sun.png';
import storm from '../images/stormCloud.png';
// useEffect to keep the fields updated? lifecycle methods?

const Today = (props) => {

        const data = props?.val?.stats ?? "?";
        let image;
        console.log(props.val.icon);
        if(props?.val?.icon === undefined) { image = sun }
        else if(props?.val?.icon === "Sunny") { image = sun } 
        else if(props?.val?.icon === "Overcast") { image = cloud } 
        else if(props?.val?.icon === "Partly cloudy") { image = partiallyCloudy } 
        else if(props?.val?.icon === "Clear") { image = sun } 
        else if(props?.val?.icon.includes("lightning") || props?.val?.icon.includes("Lightning") || props?.val?.icon.includes("thunder") || props?.val?.icon.includes("Thunder")) { image = storm } 
        else { image = rainy }

        const cloudCover = props?.val?.cloud ?? "?";        

        useEffect(() => {        
            const icon = document.querySelector("#icon");

            const temp_f = document.querySelector("#temp_f");
            const temp_c = document.querySelector("#temp_c");
            const feels_f = document.querySelector("#feels_f");
            const feels_c = document.querySelector("#feels_c");
            const humidity = document.querySelector("#humidity");
            const windspd = document.querySelector("#windspd");
            const cloud = document.querySelector("#cloud");
            const conditions = document.querySelector("#conditions");

                icon.setAttribute("src", image)
                conditions.innerText = props?.val?.icon ?? "Today's weather is ...";
                feels_c.innerText = data?.[0] ?? "?";
                feels_f.innerText = data?.[3] ?? "?";
                temp_c.innerText = data?.[2] ?? "?";
                temp_f.innerHTML = data?.[1] ?? "";
                humidity.innerText = data?.[4] ?? "?";
                windspd.innerText = data?.[5] ?? "?";
                cloud.innerText = cloudCover;

                console.log("day updated");
        });
    
    return (
        
        <div className="flex flex-row bg-black rounded-3xl bg-opacity-50 md:w-80 lg:w-60 xl:w-40">
            <div className="p-5 rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl bg-gray-200 w-60 md:w-50 flex flex-col justify-center md:p-10">
                <p className="text-center mb-5 text-gray-800 font-bold text-md md:text-lg" id="conditions"></p>
                <div className="flex flex-row items-center justify-center">
                    <img className="max-w-[80px] md:max-w-[100px]" id="icon"/>
                    <p className="text-center text-4xl md:text-6xl text-gray-800" id="temp_f"></p>                    
                </div>
            </div>

            <div className="p-5 w-50 md:flex-col md:p-10">
                <div className="flex flex-row justify-between text-white border-b border-dotted border-gray-400"><div className="p-1 font-light">Temp (C)</div><div className="p-1" id="temp_c">?</div></div> 
                <div className="flex flex-row justify-between text-white border-b border-dotted border-gray-400"><div className="p-1 font-light">Feels like (C)</div><div className="p-1" id="feels_c">?</div></div> 
                <div className="flex flex-row justify-between text-white border-b border-dotted border-gray-400"><div className="p-1 font-light">Feels like (F)</div><div className="p-1" id="feels_f">?</div></div> 
                <div className="flex flex-row justify-between text-white border-b border-dotted border-gray-400"><div className="p-1 font-light">Humidity %</div><div className="p-1" id="humidity">?</div></div> 
                <div className="flex flex-row justify-between text-white border-b border-dotted border-gray-400"><div className="p-1 font-light">Wind Spd (mph)</div><div className="p-1" id="windspd">?</div></div> 
                <div className="flex flex-row justify-between text-white"><div className="p-1 font-light">Cloud %</div><div className="p-1" id="cloud">?</div></div> 

            </div>
        </div>
    )


}

export default Today