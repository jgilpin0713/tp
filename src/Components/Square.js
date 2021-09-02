import React from "react"
import "./Square.css"
import Player1 from "./Player1"
import Player2 from "./Player2"
import {useDispatch, useSelector} from "react-redux"
import {playerPiece} from "../actions/actionCreators"


function Square({col1, col2, row1, row2, x, y, color}){
   let dispatch = useDispatch()
   let pieces = useSelector(state => state.squares.isPiece)
    let piece;
    if(color[color.length -1] === "p"){
        piece = color
        color = piece.slice(0,color.length-1)
        dispatch(playerPiece())
    }
    
    if((col1 === y && row1 === x) ) {
        return(
            <div className = "Container">
                <div className = "BoardSquare" style = {{backgroundColor: color, left: "15%"}}>
                    <Player1 color = {color} isPiece = {pieces}/>
                </div>
            </div> 
        )
    }else if (col2 === y && row2 ===x){
        return(
            <div className = "Container">
                <div className = "BoardSquare" style = {{backgroundColor: color, left: "55%"}}>
                    <Player2 color = {color} isPiece = {pieces}/>
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
                    <div className = "PieceSquare">
                    </div>
                </div>
            </div> 
        )
    }else if (color === "gray" ){
        return(
            <div className = "Container">
                <div className = "BoardSquare" style = {{backgroundColor: color}}>
                    <div className = "Choose"> Roll Again </div>
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