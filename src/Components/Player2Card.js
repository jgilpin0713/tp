import React from "react"
import {useSelector} from "react-redux"

function Player2Card(){
    let colors = useSelector(state => state.player2.colorsWon)
    let turn = useSelector(state => state.turn.player)

    if(turn === 2){
    return(
        <div>
            <h2>Player 2</h2>
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
                <h2>Player 2</h2>
                <div>{colors.map((colors, index )=>
                        <div style={{ backgroundColor: `${colors}`}} key = {index}> 
                            {colors}
                        </div> 
                    )}</div>
            </div> 
        )
    }
}

export default Player2Card