import React from "react"
import "./Piece.css"
import {useSelector} from "react-redux"


function Piece2(){
    let color = useSelector(state => state.turn.player2Color)
    return(
        <div className = "Container">
            <div className = "Piece" style={{ backgroundColor: `${color}`}}></div>
        </div>
    )
}

export default Piece2