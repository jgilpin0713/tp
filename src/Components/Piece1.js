import React from "react"
import "./Piece.css"
import {useSelector} from "react-redux"


function Piece1(){
    let color = useSelector(state => state.turn.player1Color)
    return(
        <div className = "Container">
            <div className = "Piece" style={{ backgroundColor: `${color}`}}></div>
        </div>
    )
}

export default Piece1