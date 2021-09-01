import React from "react"
import "./Piece.css"
import {useSelector} from "react-redux"


function Piece1(){
    let color = useSelector(state => state.turn.player1Color)
    
    return(
        <div className = "Container" style = {{top: "20%", left: "15%"}}>
            <div className = "Piece" style={{ backgroundColor: `${color}`}}></div>
        </div>
    )
}

export default Piece1