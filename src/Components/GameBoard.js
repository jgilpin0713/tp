import React from "react"
import Square from "./Square"
import "./GameBoard.css"


function GameBoard(){
    const boardSetup = [
        ["pinkp","blue", "gray", "orange","gray","purple","bluep", "yellow", "gray","green", "gray", "pink", "orangep"],
        ["blue","green", "lightgray", "lightgray","lightgray","lightgray","pink", "lightgray", "lightgray","lightgray", "lightgray", "blue", "purple"],
        ["gray","lightgray", "yellow", "lightgray","lightgray","lightgray","green", "lightgray", "lightgray","lightgray", "pink", "lightgray", "gray"],
        ["purple","lightgray", "lightgray", "purple","lightgray","lightgray","yellow", "lightgray", "lightgray","green", "lightgray", "lightgray", "yellow"],
        ["gray","lightgray", "lightgray", "lightgray","orange","lightgray","purple", "lightgray", "yellow","lightgray", "lightgray", "lightgray", "gray"],
        ["green","lightgray", "lightgray", "lightgray","lightgray","blue","orange", "purple", "lightgray","lightgray", "lightgray", "lightgray", "green"],
        ["orchid","lightgray", "lightgray", "lightgray","lightgray","lightgray","white", "lightgray", "lightgray","lightgray", "lightgray", "lightgray", "orchid"],
        ["yellow","lightgray", "lightgray", "lightgray","lightgray","pink","green", "yellow", "lightgray","lightgray", "lightgray", "lightgray", "pink"],
        ["gray","lightgray", "lightgray", "lightgray","blue","lightgray","pink", "lightgray", "green","lightgray", "lightgray", "lightgray", "gray"],
        ["orange","lightgray", "lightgray", "orange","lightgray","lightgray","blue", "lightgray", "lightgray","pink", "lightgray", "lightgray", "orange"],
        ["gray","lightgray", "purple", "lightgray","lightgray","lightgray","orange", "lightgray", "lightgray","lightgray", "blue", "lightgray", "gray"],
        ["pink","yellow", "lightgray", "lightgray","lightgray","lightgray","purple", "lightgray", "lightgray","lightgray", "lightgray", "orange", "blue"],
        ["greenp","pink", "gray", "blue","gray","orange","yellowp", "purple", "gray","yellow", "gray", "green", "purplep"],
    ]
    
    
    return (
        <div className = "GameBoard">
            {boardSetup.map((row, x ) => (
                <div key = {x}>
                    {boardSetup[0].map((col, y) => {
                            return <div key = {y}><Square color = {row[y]} />
                            </div>;
                        })}
                </div>  
            ))}
        </div>
    )
}

export default GameBoard