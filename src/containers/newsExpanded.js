import React, { useEffect, useState, useRef }from "react";
import Story from '../components/story';
import Loading from '../components/loader.js';
import Error from '../components/error';

// only for the news page
const NewsExpanded = (props) => {

    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    const data = (info, response) => {
        console.log(info)
        if(response.status === 200) {        
            const storyComponents = info.map(item => {
                return <Story key={item.id} link={item.url} headline={item.seometa.title} desc={item.seometa.description} img={item.variants[0]}/>
            });
            setStories(storyComponents);
            setLoading(false);
        } else {
            setStories([]);
            const storyComponents = <Error status={response.status}/>
        
            setStories(storyComponents);
            setLoading(false);
        }
    } 
 
    useEffect(() => {        
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '98a8341ffcmsh7a4d6c17a49f6ecp153be9jsn0d3a5abcccce',
                    'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
                }
            };
            
            const getNews = async () => {
                try {
                    const response = await fetch('https://weather338.p.rapidapi.com/news/list?offset=0&limit=30', options)
                    const info = await response.json()
                        console.log("fetching news...", response.status)
                    
                    data(info, response)
                } catch(error) {
                    throw "An error occured when trying to fetch the news"
                }
        }
        getNews()

     }, [])

    return (
            <div className="p-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-5 xl:grid-cols-4">
                {
                    loading 
                        ? <div alt="loading..." className="col-span-4 loading loading-bars loading-xl text-info"></div> 
                        : stories
                }
            </div>
    )
}  

export default NewsExpanded