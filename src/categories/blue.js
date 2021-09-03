import React, {useEffect} from "react"
import { useDispatch, useSelector} from "react-redux"
import { collectPiece, collectPiece2, nextBlue, roll, roll2, player1, player2 } from "../actions/actionCreators"
import shuffle from "../helpers/shuffle"

function Blue(){
    let dispatch = useDispatch()
    let blue = useSelector(state => state.question.blueQuestions)
    let index = useSelector(state => state.question.blueQIndex)
    let piece = useSelector(state => state.squares.isPiece)
    let turn = useSelector(state => state.turn.player)
    
    let allQuestions = []
    allQuestions = [...blue]
    let currentQ = allQuestions[index].question
    let correct = allQuestions[index].correct_answer
    let incorrect = []
    incorrect = [...allQuestions[index].incorrect_answers]
    let guesses = []
    guesses = [...incorrect, correct]
    shuffle(guesses)

    
    function handleClick(answer){
        if(answer === correct){
            if(turn === 1 && piece){
                return(
                    dispatch(collectPiece())
                )
            } else if (turn === 1 && !piece) {
                return (
                    dispatch(roll())
                )
            } else if (turn === 2 && piece) {
                return(
                    dispatch(collectPiece2())
                )
            } else if (turn === 2 && !piece){
                return (
                    dispatch(roll2())
                )
            }     
        } else {
            if(turn === 2){
                dispatch(roll2())
                return (
                    dispatch(player1())
                )
            } else {
                dispatch(roll())
                return(
                    dispatch(player2())
                )
            }
        }
    }

    useEffect (() => {
            dispatch(nextBlue())
        }, [dispatch])


    return(
        <div>
            <h4>{currentQ}</h4>
            <h5>{guesses.map((answer, index )=>
                <div> 
                    <button onClick = {() => handleClick(answer) }key = {index}> {answer} </button>
                </div>
                            
            )}</h5>
        </div>
    )     
}

export default Blue