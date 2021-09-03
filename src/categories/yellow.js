import React, {useEffect} from "react"
import { useDispatch, useSelector} from "react-redux"
import { nextYellow, player1, player2, roll, collectPiece, collectPiece2, roll2 } from "../actions/actionCreators"
import shuffle from "../helpers/shuffle"



function Yellow(){
    let dispatch = useDispatch()
    let yellow = useSelector(state => state.question.yellowQuestions)
    let index = useSelector(state => state.question.yellowQIndex)
    let turn = useSelector(state => state.turn)
    let piece = useSelector(state => state.squares.isPiece)
    
    let questions = []
    questions = [...yellow]
    let currentQ = questions[index].question
    let correct = questions[index].correct_answer
    let incorrect = []
    incorrect = [...questions[index].incorrect_answers]
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
        dispatch(nextYellow())
    }, [dispatch])
   
    return(
        <div>
            <h4>{currentQ}</h4>
            <h5>{guesses.map((answers, index )=>
                    <button onClick = {() => handleClick(answers)}key = {index}> {answers} </button>
                )}</h5>
        </div>
    )
}

export default Yellow