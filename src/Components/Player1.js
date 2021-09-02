import React, {useEffect} from "react"
import Piece1 from "./Piece1.js"
import {useDispatch} from "react-redux"
import { getColor } from "../actions/actionCreators.js"



function Player1({color}){
    
    let dispatch = useDispatch()
   
    useEffect (() => {
       dispatch(getColor(color)) 
    }, [dispatch, color])
    

    return(
        <div>
            <Piece1 />
        </div>
    )
}

export default Player1