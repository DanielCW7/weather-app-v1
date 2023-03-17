import React, { useEffect, useState, useRef }from "react";
import Hero from '../containers/hero';
import Sports from '../components/sports'
import football from '../images/football.jpg';
import Loading from '../components/loader.js';
import Error from '../components/error.js'

// forecast page with more weather data
const SportsPage = () => {

    const font = {color: '#fff', textShadow: '2px 2px 2px #000'};
    const background = {backgroundImage: `url(${football})`};

    const [sports, setStories] = useState([]);
    const [loading, setLoading] = useState(true)

    const data = (info, response) => {
        console.log(info)
        if(response.status === 200) {        
            const sportsComponents = info.topStories.map(item => {
                return <Sports key={item.id} link={item.url} headline={item.title} img={item.mainMedia.gallery.url}/>
            });
            setStories(sportsComponents)
            setLoading(false);
        } else {
            setStories([]);
            const sportsComponents = <Error status={response.status}/>
        
            setStories(sportsComponents);
            setLoading(false);

        }
    } 
 

    useEffect(() => {        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '98a8341ffcmsh7a4d6c17a49f6ecp153be9jsn0d3a5abcccce',
                'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
            }
        };
            
        // for sports
        const getSports = async () => {
            try {
                const response = await fetch('https://livescore6.p.rapidapi.com/news/v2/list', options)
                const info = await response.json()
                    console.log("fetching data...", response.status)
                    
                    data(info, response)
                } catch(error) {
                    throw "An error occured when trying to fetch the sports news"
                }
        }

        getSports()
    }, [])

    return(
        <div>
            <Hero title="Sports News" background={background} font={font}/>
            <div id="newsContainer" className="p-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-5 xl:grid-cols-4">
                {loading ? <Loading /> : sports}
            </div>
        </div>
    ) 
}

export default SportsPage