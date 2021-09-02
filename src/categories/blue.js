import React, {useEffect} from "react"
import { useDispatch, useSelector} from "react-redux"
import { nextBlue, player1, player2, roll, collectPiece, collectPiece2, roll2 } from "../actions/actionCreators"
import shuffle from "../helpers/shuffle"



function Blue(){
    let dispatch = useDispatch()
    let blue = useSelector(state => state.question.blueQuestions)
    let index = useSelector(state => state.question.blueQIndex)
    let turn = useSelector(state => state.turn)
    let piece = useSelector(state => state.squares.isPiece)
    
    let questions = []
    questions = [...blue]
    let currentQ = questions[index].question
    let correct = questions[index].correct_answer
    let incorrect = []
    incorrect = [...questions[index].incorrect_answers]
    let guesses = []
    guesses = [...incorrect, correct]
    shuffle(guesses)



    function handleClick(answers){
        
        if(answers === correct && piece){
            if(turn === 1){
                dispatch(collectPiece())
                dispatch(roll())
            return(
                <div>
                    <p>You won a piece! Your answer was Correct</p>
                </div>
            )
            } else {
                dispatch(collectPiece2())
                dispatch(roll2())
                return(
                    <div>
                        <p>You won a piece! Your answer was Correct</p>
                    </div>
                )
            }
        } else if(answers === correct && !piece){
            if(turn === 1){
                dispatch(roll())
            return(
                <div>
                    <p>Your answer was Correct</p>
                </div>
            )
            } else {
                dispatch(roll2())
                return(
                    <div>
                        <p>Your answer was Correct</p>
                    </div>
                )
            }
        } else if(answers !== correct){
            if (turn === 2){
                dispatch(player1())
                dispatch(roll())
                return(
                    <div>
                        <p>I'm sorry your answer was incorrect it's Player 1's Turn now</p>
                    </div>
                )
            } else {
                dispatch(player2())
                dispatch(roll2())
                return(
                    <div>
                        <p>I'm sorry your answer was incorrect it's Player 2's Turn now</p>
                    </div>
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
            <h5>{guesses.map((answers, index )=>
                    <button onClick = {() => handleClick(answers)}key = {index}> {answers} </button>
                )}</h5>
        </div>
    )
}

export default Blue