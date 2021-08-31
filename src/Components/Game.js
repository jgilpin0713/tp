import React, {useState} from "react"
import GameBoard from "./GameBoard"
import Player from "./Player"
import GameStats from "./GameStats"
import LoadGame from "../LoadGame"

function Game(){
    const [isLoading, setIsLoading] = useState(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 5000);

    if (isLoading){
        return(
            <LoadGame />
        )
    } else {
            
    return (
        <div>
            <h1>Trivial Pursuit</h1>
            <GameBoard />
            <Player />
            <GameStats />
        </div>
    )
    }
}

export default Game