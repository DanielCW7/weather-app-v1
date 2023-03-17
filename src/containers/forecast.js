import React, { useEffect, useState }from "react";
import Form from "../components/form";
import Today from "../components/todayWeather";
import Week from "../components/week";

import sunny from "../images/sunny2.webp";
import lightning from "../images/lightning.webp";
import rainy from "../images/rain.webp";
import foggy from "../images/fog.webp";
import snowy from "../images/snowy.webp";
import clearSky from "../images/clearSky.webp";
import overcast from "../images/overcast.webp";
import partlyCloudy from "../images/partlyCloudy.webp";




const Forecast = () => {

    const [val, setVal] = useState("");
    const [val2, setVal2] = useState("");
    // detect the icon from today's weather, here in "val.icon", first undefined

    // default background
    let background;
    const bg = () => {
        let condition = val.icon;

        if(condition === undefined) { return background = sunny }
        else if(condition === "Clear") { return background = clearSky }
        else if(condition.includes("snow")) { return background = snowy }
        else if(condition.includes("Partly cloudy")) { return background = partlyCloudy }
        else if(condition.includes("storm") || condition.includes("lightning") || condition.includes("Lightning") || condition.includes("thunder")) { return background = lightning }
        else if(condition.includes("Mist") || condition.includes("rain")) { return background = rainy }
        else if(condition.includes("Overcast")) { return background = overcast }
        else if(condition.includes("Fog")) { return background = foggy }
        else { return background = sunny }
    }


    return (
            <div style={{backgroundImage: `url(${bg()})`}} className="bg-bottom bg-cover min-h-auto flex flex-col justify-end">
                <div className="p-5 md:p-10 bg-gradient-to-b via-white-200 from-white justify-between flex-auto md:bg-gradient-to-br">
                    <Form today={setVal} week={setVal2} />
                    <Today val={val} />
                </div>
                <div className="flex flex-row justify-center">
                    <Week val2={val2}/>
                </div>
            </div>
    )
}

export default Forecast