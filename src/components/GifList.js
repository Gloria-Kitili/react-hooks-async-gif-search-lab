import React from "react";

function GifList({gifts}){

return(
    <ul>
        {gifts.map((gif) =>(
        <li key = {gif.id}>
         <img src = {gif.images.original.url} alt = {gif.title} />   
        </li>
        ))}
    </ul>
)
}

export default GifList;