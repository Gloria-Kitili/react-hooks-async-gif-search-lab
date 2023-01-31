import React, {Component} from "react";

function GifSearch ({handleSubmit,search,setSearch}){
     
    return(
        <>
        <form onSubmit = {handleSubmit}>
        <label>
            Enter a Search Term:
            <input 
            type = "text"
            value = {search}
            placeholder = "Search Gifs"
            onChange = {(event) => setSearch (event.target.value)}
            />
        </label>
        <input 
        type = "submit"
        value = "Submit" />
        </form>
        </>

    
    )
}

export default GifSearch;