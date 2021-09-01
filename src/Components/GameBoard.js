import React from "react"
import Square from "./Square"
import Legend from "./Legend"
import "./GameBoard.css"
import {useSelector, useDispatch} from "react-redux"
import { makeBoard } from "../actions/actionCreators"
import {boardSetup} from "../helpers/makeboard"


function GameBoard(){
    let dispatch = useDispatch()
    
    
    dispatch(makeBoard(boardSetup))

    let gameboard = useSelector(state => state.turn.board)
    
    return (
        <div className = "GameBoard">
            {gameboard.map((row, x ) => (
                <div key = {x}>
                    {gameboard[0].map((col, y) => {
                            return <div key = {y}><Square x = {x} y = {y} color = {row[y]} />
                            </div>;
                        })}
                </div>  
            ))}
            <Legend />
        </div>
    )
}

export default GameBoard