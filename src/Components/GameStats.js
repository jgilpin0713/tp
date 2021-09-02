import React from "react"
import Dice from "./Dice"
import Player1Card from "./Player1Card"
import Player2Card from "./Player2Card"


function GameStats(){
    return(
        <div>
           <h4>GAME STATS</h4> 
           <Player1Card /> 
           <Player2Card />
           <Dice />
        </div>
        
    )
}

export default GameStats