
import { useState } from "react";
import { Container } from "reactstrap";
import Todo from "./Todo";

const AllTodos=()=>{
    const[todos,setTodos]=useState([
        {title:"Title1",desc:"Do This"},
        {title:"Title2",desc:"Do This"}
    ])

    return (
        <div>
            <h3 className="text-center mt-2 mb-3">PENDING</h3>
            {
                todos.length>0 
                ? todos.map ((item) => <Todo todo={item}/>) 
                : "No Movies"
            }
           
        </div>
    )
    
}

export default AllTodos;