import React, { useEffect, useState }from "react";
import cloud from '../images/cloud.png';
import partiallyCloudy from '../images/partiallyCloudy.png';
import rainy from '../images/rainy.png';
import snow from '../images/snow.png';
import sun from '../images/sun.png';
import storm from '../images/stormCloud.png';

const Today = (props) => {


    const [isData, setData] = useState({
        img: sun,
        temp: "",        
        farenheit: 0,
        farenheitFeels: 0,
        celsius: 0,
        celsiusFeels: 0,
        wind: 0,
        humid: 0
    })

    const {stats, icon} = props.val;
    let updated = {}

    console.log("today is: ", stats)
    try { 
        if(icon === undefined) { updated.img = sun }
        else if(icon.includes("Sun" || "sun")) { updated.img = sun } 
        else if(icon.includes("cast")) { updated.img = cloud } 
        else if(icon.includes("art" && "cloud")) { updated.img = partiallyCloudy } 
        else if(icon.includes("Clear" || "clear")) { updated.img = sun } 
        else if(icon.includes("lightning") || icon.includes("Lightning") || icon.includes("thunder") || icon.includes("Thunder")) { updated.img = storm } 
        else { updated.img = sun }

        // stats[0] feels cels
        // stats[1] feels faren
        // stats[2] temp cels
        // stats[3] temp faren
        // stats[4] humid
        // stats[5] wind



        if (stats[3]) {
            updated.farenheit = stats[3]
            if (stats[3] < 60) { updated.temp = "info" }
            else if (stats[3] < 80 && stats[3] >= 60) { updated.temp = "success" } 
            else if (stats[3] < 90 && stats[3] >= 80) { updated.temp = "warning" }
            else { updated.temp = "error" };
        } else { return } 

        updated.celsiusFeels = stats[0]
        updated.farenheitFeels = stats[1]
        updated.celsius = stats[2]
        updated.humid = stats[4]
        updated.wind = stats[5]     

        isData.farenheitFeels = updated.farenheitFeels
        isData.farenheit = updated.farenheit
        isData.celsiusFeels = updated.celsiusFeels
        isData.celsius = updated.celsius
        isData.img = updated.img
        isData.wind = updated.wind
        isData.humid = updated.humid
        isData.temp = updated.temp

    } catch(err) {
        console.log(err)
    } finally {
        console.log("done logging data", updated)
    }
    
    // destructure props
    // use state to keep track of stats, dry up code

        // const data = props?.val?.stats ?? "?";
        // let image;
        // console.log(props.val.icon);
        // if(props?.val?.icon === undefined) { image = sun }
        // else if(props?.val?.icon === "Sunny") { image = sun } 
        // else if(props?.val?.icon === "Overcast") { image = cloud } 
        // else if(props?.val?.icon === "Partly cloudy") { image = partiallyCloudy } 
        // else if(props?.val?.icon === "Clear") { image = sun } 
        // else if(props?.val?.icon.includes("lightning") || props?.val?.icon.includes("Lightning") || props?.val?.icon.includes("thunder") || props?.val?.icon.includes("Thunder")) { image = storm } 
        // else { image = rainy }

        // const cloudCover = props?.val?.cloud ?? "?";        

        // useEffect(() => {        
        //     const icon = document.querySelector("#icon");

        //     const temp_f = document.querySelector("#temp_f");
        //     const temp_c = document.querySelector("#temp_c");
        //     const feels_f = document.querySelector("#feels_f");
        //     const feels_c = document.querySelector("#feels_c");
        //     const humidity = document.querySelector("#humidity");
        //     const windspd = document.querySelector("#windspd");
        //     const cloud = document.querySelector("#cloud");
        //     const conditions = document.querySelector("#conditions");

        //         icon.setAttribute("src", image)
        //         conditions.innerText = props?.val?.icon ?? "Today's weather is ...";
        //         feels_c.innerText = data?.[0] ?? "?";
        //         feels_f.innerText = data?.[3] ?? "?";
        //         temp_c.innerText = data?.[2] ?? "?";
        //         temp_f.innerHTML = data?.[1] ?? "";
        //         humidity.innerText = data?.[4] ?? "?";
        //         windspd.innerText = data?.[5] ?? "?";
        //         cloud.innerText = cloudCover;
        // });
    
    return (
        
        <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-center gap-4">
                {/* <p className="" id="conditions"></p> */}
                
                <div className="stat shadow w-max m-auto rounded-lg bg-base-200">
                    <div className="stat-figure text-secondary">
                        <img src={isData.img} className="w-18 h-18"/>
                    </div>
                    <div className="stat-title">Temperature</div>
                    <div className={`stat-value text-${isData.temp} text-5xl`}>{isData.farenheit}<sup>o</sup>F</div>
                    <div className="stat-desc">Partly cloudy</div>
                </div>
                <div className="grow">
                    <div className="flex gap-2 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.45 122.88" className="w-12 fill-info"><polygon points="61.32,0 61.32,15.53 71.86,5.52 79.03,13.05 61.32,29.87 61.32,52.37 80.99,41.01 86.65,17.45 96.76,19.89 93.41,33.84 106.74,26.14 111.95,35.17 98.51,42.94 112.45,47.06 109.51,57.04 86.09,50.11 66.66,61.32 86.28,72.65 109.51,65.78 112.45,75.75 98.7,79.82 112.03,87.52 106.82,96.55 93.37,88.79 96.76,102.93 86.65,105.37 80.94,81.62 61.32,70.29 61.32,92.89 79.03,109.71 71.86,117.24 61.32,107.23 61.32,122.88 50.89,122.88 50.89,107.37 40.49,117.25 33.32,109.71 50.89,93.03 50.89,70.43 31.51,81.62 25.8,105.37 15.69,102.93 19.08,88.79 5.54,96.61 0.32,87.58 13.75,79.83 0,75.76 2.94,65.78 26.17,72.66 45.79,61.33 26.36,50.11 2.94,57.04 0,47.06 13.94,42.94 0.39,35.11 5.61,26.08 19.04,33.84 15.69,19.89 25.8,17.45 31.46,41.01 50.89,52.22 50.89,29.73 33.32,13.05 40.49,5.52 50.89,15.39 50.89,0 61.32,0"/></svg>
                        <progress className={`m-auto progress progress-${isData.temp} w-full`} value={isData.farenheit} min={-50} max={150}></progress>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="size-12">
                            <path className="stroke-error fill-error" strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            <path className="stroke-warning fill-warning" strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                        </svg>

                    </div>
                </div>
            </div>

            <table className="flex flex-col table table-zebra">
                <thead className="bg-base-300">
                    <th>Condition</th>
                    <th>Value</th>
                </thead>

                <tbody className="table-xs">
                    <tr>
                        <th>Temp (F)</th>
                        <td id="temp_f">{isData.farenheit ? isData.farenheit : "?"}</td>
                    </tr>   
                    <tr>
                        <th>Feels like (F)</th>
                        <td id="temp_f">{isData.farenheitFeels ? isData.farenheitFeels : "?"}</td>
                    </tr>                  
                    <tr>
                        <th>Temp (C)</th>
                        <td id="temp_c">{isData.celsius ? isData.celsius : "?"}</td>
                    </tr>
                    <tr>
                        <th>Feels like (C)</th>
                        <td id="feels_c">{isData.celsiusFeels ? isData.celsiusFeels : "?"}</td>
                    </tr>
                    <tr>
                        <th>Humidity %</th>
                        <td id="humidity">{isData.humid ? isData.humid : "?"}</td>
                    </tr>
                    <tr>
                        <th>Wind Spd (mph)</th>
                        <td id="windspd">{isData.wind ? isData.wind : "?"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )


}

export default Today