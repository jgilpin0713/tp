import React, {useEffect} from "react"
import Piece2 from "./Piece2"
import {useDispatch} from "react-redux"
import { getColor } from "../actions/actionCreators"

function Player2({color}){
    
    let dispatch = useDispatch()
    
    useEffect (() => {
        dispatch(getColor(color)) 
     }, [dispatch, color])
    
    return(
        <div>
            <Piece2 />
        </div>
    )
}

export default Player2


