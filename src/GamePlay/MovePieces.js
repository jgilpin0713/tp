import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {moveDown, moveUp, moveLeft, moveUpLeft, moveDownLeft, moveUpRight, moveDownRight, moveRight, moveUp2, moveDown2, moveLeft2, moveRight2, moveUpLeft2, moveDownLeft2, moveUpRight2, moveDownRight2, questions} from "../actions/actionCreators"

function MovePieces(){
    let dispatch = useDispatch()
    let player  = useSelector(state => state.turn.player)
    //let player1 = useSelector(state => state.player1.movesLeft1)
    //let player2 = useSelector(state => state.player2.movesLeft2)
    //console.log(player1)
   // console.log(player2)
    console.log(player)

    function handleUp(){
        if (player === 1){ 
           dispatch(moveUp()) 
    }
        if (player ===2){
            dispatch(moveUp2())
        }
    }
    function handleDown(){
        if (player === 1){
           dispatch(moveDown()) 
        } else{
            dispatch(moveDown2())
        }
    }

    function handleLeft(){
        if (player === 1){
           dispatch(moveLeft()) 
        } else{
            dispatch(moveLeft2())
        }
    }

    function handleRight(){
        if (player === 1){
           dispatch(moveRight()) 
        } else{
            dispatch(moveRight2())
        }
    }
    function handleUpLeft(){
        if (player === 1){
           dispatch(moveUpLeft()) 
        } else{
            dispatch(moveUpLeft2())
        }
    }

    function handleDownLeft(){
        if (player === 1){
           dispatch(moveDownLeft()) 
        } else{
            dispatch(moveDownLeft2())
        }
    }

    function handleUpRight(){
        if (player === 1){
           dispatch(moveUpRight()) 
        } else{
            dispatch(moveUpRight2())
        }
    }

    function handleDownRight(){
        if (player === 1){
           dispatch(moveDownRight()) 
        } else{
            dispatch(moveDownRight2())
        }
    } 
    useEffect (() => {
        dispatch(questions())
    }, [dispatch])     
    
    return(
        <div>
            <p>Select an option:</p>
            <button onClick = {handleUp}>Up</button>
            <button onClick = {handleDown}>Down</button>
            <button onClick = {handleLeft}>Left</button>
            <button onClick = {handleRight}>Right</button>
            <button onClick = {handleUpLeft}>Up & Left</button>
            <button onClick = {handleUpRight}>Up & Right</button>
            <button onClick = {handleDownLeft}>Down & Left</button>
            <button onClick = {handleDownRight}>Down & Right</button>
        </div>
    )
}

export default MovePieces;