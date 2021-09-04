import React from "react";
import Countries from "../Countries/Countries";
import Filtrados from "../Filtrados/Filtrados";
import Ordenamientos from "../Ordenamientos/Ordenamientos"


const Home = (props) => {  
    
    return(
        <div className="HomeContainer">
           <Filtrados />
           <Ordenamientos />
           <Countries />
        </div>
    )
}



export default Home