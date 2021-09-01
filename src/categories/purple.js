import React from "react"
import { useDispatch, useSelector} from "react-redux"
import { nextPurple, player1, player2, roll, collectPiece } from "../actions/actionCreators"
import shuffle from "../helpers/shuffle"



function Purple(){
    let dispatch = useDispatch()
    let purple = useSelector(state => state.question.purpleQuestions)
    let index = useSelector(state => state.question.purpleQIndex)
    let turn = useSelector(state => state.turn)
    let piece = useSelector(state => state.squares.isPiece)
    
    let questions = []
    questions = [...purple]
    let currentQ = questions[index].question
    let correct = questions[index].correct_answer
    let incorrect = []
    incorrect = [...questions[index].incorrect_answers]
    let guesses = []
    guesses = [...incorrect, correct]
    shuffle(guesses)



    function handleClick(answers){
        console.log(answers)
        console.log(correct)
        if(answers === correct && piece){
            dispatch(roll())
            dispatch(collectPiece())
        } else if(answers === correct){
            dispatch(roll())
        }else {
            if (turn === 2){
                dispatch(roll())
                dispatch(player1())
            } else {
                
                dispatch(player2())
                dispatch(roll())
            }
        }
        dispatch(nextPurple())
    }
   
    return(
        <div>
            <h4>{currentQ}</h4>
            <h5>{guesses.map((answers, index )=>
                    <button onClick = {() => handleClick(answers)}key = {index}> {answers} </button>
                )}</h5>
        </div>
    )
}

export default Purple