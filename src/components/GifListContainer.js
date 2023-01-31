import React from "react";
import GifList from "./GifList";
import GifSearch from "./GIfSearch"

function GifListContainer(){
    const [gifs,setGifs] = useState([]);

    const handleSubmit = () => {
        fetch(
            `https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`
        )
        .then((res)=> res.json())
        .then((data)=>setGifs(data.data));
    }


return(
    <>
    <GifSearch onSearch = {handleSubmit} />
    <GifList gifs = {gifs}/>
    </>
)
}

export default GifListContainer;