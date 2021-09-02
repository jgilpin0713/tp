import React, {useState} from "react"
import GameBoard from "./GameBoard"
import GameStats from "./GameStats"
import LoadGame from "../LoadGame"
import Turn from "../GamePlay/Turn"

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
            <GameStats />
            <div>
               <Turn />  
            </div>
            <GameBoard />
            
        </div>
    )
    }
}

export default Game