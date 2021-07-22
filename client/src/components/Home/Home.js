import React, {useEffect, useDispatch, useState} from "react";
import Countries from "../Countries/Countries";
import Filtrados from "../Filtrados/Filtrados";
import Ordenamientos from "../Ordenamientos/Ordenamientos"
import { connect } from "react-redux";
import { FetchActivities} from "../../Actions/actions";

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