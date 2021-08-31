import React from "react"
import { useDispatch, useSelector} from "react-redux"
import { nextGreen, player1, player2, roll, collectPiece } from "../actions/actionCreators"
import shuffle from "../helpers/shuffle"



function Green(){
    let dispatch = useDispatch()
    let green = useSelector(state => state.question.greenQuestions)
    let index = useSelector(state => state.question.greenQIndex)
    let turn = useSelector(state => state.turn)
    let piece = useSelector(state => state.squares.isPiece)
    
    let questions = []
    questions = [...green]
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
        dispatch(nextGreen())
    }
   
    return(
        <div>
            <h4>{currentQ}</h4>
            <h5>{guesses.map((answers, index )=>
                    <button onClick = {() => handleClick(answers)}> {answers} </button>
                )}</h5>
        </div>
    )
}

export default Green