import { useState } from "react";
import Movie from "./Movie";

const AllMovies=()=>{
    const[movies,setMovies]=useState([
        {name:"Assassin's Creed", director:"Justin Kurzel", release:"2016", rating:"5.7/10"},
        {name:"F9", director:"Justin Lin", release:"2021", rating:"5.2/10"}
    ])

    return (
        <div>
            {
                movies.length>0 
                ? movies.map ((item) => <Movie movie={item}/>) 
                : "No Movies"
            }
        </div>
    )
    
}

export default AllMovies;