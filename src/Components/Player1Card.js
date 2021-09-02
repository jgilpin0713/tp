import React from "react"
import {useSelector} from "react-redux"
import Piece1 from "./Piece1"

function Player1Card(){
    let colors = useSelector(state => state.player1.colorsWon1)
    let turn = useSelector(state => state.turn.player)

    if(turn === 1){
    return(
        <div>
            <h2>Player 1<Piece1 /> </h2> 
            <p>Pieces Won:</p>
            <div>{colors.map((colors, index )=>
                    <div style={{ backgroundColor: `${colors}`, boxShadow: "0 2px 0 0 black" }} key = {index}> 
                        {colors}
                    </div> 
                )}</div>
        </div>
    )
    } else {
        return(
            <div>
                <h2>Player 1<Piece1 /></h2>
                <p>Pieces Won:</p>
                <div>{colors.map((colors, index )=>
                        <div style={{ backgroundColor: `${colors}`}}> 
                            {colors}
                        </div> 
                    )}</div>
            </div> 
        )
    }
}

export default Player1Card