import React, {useEffect} from "react"
import Square from "./Square"
import Legend from "./Legend"
import "./GameBoard.css"
import {useSelector, useDispatch} from "react-redux"
import { makeBoard } from "../actions/actionCreators"
import {boardSetup} from "../helpers/makeboard"


function GameBoard(){
    let dispatch = useDispatch()
    let col11 = useSelector(state => state.player1.col1)
    let row11 = useSelector(state => state.player1.row1)
    let col22 = useSelector(state => state.player2.col2)
    let row22 = useSelector(state => state.player2.row2)
    
    useEffect (() => {
        dispatch(makeBoard(boardSetup))
    }, [dispatch])

    let gameboard = useSelector(state => state.turn.board)
    
    return (
        <div className = "GameBoard">
            {gameboard.map((row, x ) => (
                <div key = {x}>
                    {gameboard[0].map((col, y) => {
                            return <div key = {y}><Square 
                                            x = {x} 
                                            y = {y}
                                            color = {row[y]}
                                            col1 = {col11}
                                            row1 = {row11}
                                            col2 = {col22}
                                            row2 = {row22} />
                            </div>;
                        })}
                </div>  
            ))}
            <Legend />
        </div>
    )
}

export default GameBoard