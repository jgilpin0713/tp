import React from "react"
import "./Square.css"

function Square({color}){
    let piece;
    if(color[color.length -1] === "p"){
        piece = color
        color = piece.slice(0,color.length-1)
    }
    
    // let home = board[y = 6][x=6]
    // let greenPiece = board[y = 12][x=0]
    // let pinkPiece = board[y = 0][x=0]
    // let orangePiece = board[y = 0][x=12]
    // let yellowPiece = board[y = 12][x=6]
    // let bluePiece = board[y = 0][x=6]
    // let purplePiece = board[y = 12][x=12]
    // //let choose1 = board[y = 6][x=12]
    // //let choose2 = board[y = 6][x=0]

    
    
    if( color === "gray" ){
    return(
        <div className = "Container">
            <div className = "BoardSquare" style = {{backgroundColor: color}}>
                <div className = "Choose"> Roll Again </div>
            </div>
        </div>
    )
    }else if (color === "orchid") {
        return(
            <div className = "Container">
                <div className = "BoardSquare" style = {{backgroundColor: color}}>
                    <div className = "Choose"> You Choose</div>
                </div>
            </div> 
        )
    } else if (color === "white") {
        return(
            <div className = "Container">
                <div className = "BoardSquare" style = {{backgroundColor: color}}>
                    <div className = "Choose"> Home </div>
                </div>
            </div> 
        )
    }else if (piece) {
        return(
            <div className = "Container">
                <div className = "BoardSquare" style = {{backgroundColor: color}}>
                    <div className = "Piece">P</div>
                </div>
            </div> 
        )
    }else {
        return(
            <div className = "Container">
                <div className = "BoardSquare" style = {{backgroundColor: color}}>
                </div>
            </div> 
        )
    }
}

export default Square