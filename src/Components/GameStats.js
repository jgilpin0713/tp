import React from "react"
import Dice from "./Dice"
import Player1Card from "./Player1Card"
import Player2Card from "./Player2Card"
import QuestionCard from "./QuestionCard"

function GameStats(){
    return(
        <div>
           <h1>GAME STATS</h1> 
           <Dice />
           <Player1Card /> 
           <Player2Card />
           <QuestionCard />
        </div>
        
    )
}

export default GameStats