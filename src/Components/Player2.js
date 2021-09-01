import React from "react"
import Piece2 from "./Piece2"
import {useDispatch} from "react-redux"
import { getColor } from "../actions/actionCreators"

function Player2({color}){
    let dispatch = useDispatch()
    dispatch(getColor(color))
    return(
        <div>
            <Piece2 />
        </div>
    )
}

export default Player2


