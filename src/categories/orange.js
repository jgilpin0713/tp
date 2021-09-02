import React, {useEffect}  from "react"
import { useDispatch, useSelector} from "react-redux"
import { nextOrange, player1, player2, roll, roll2, collectPiece, collectPiece2 } from "../actions/actionCreators"
import shuffle from "../helpers/shuffle"



function Orange(){
    let dispatch = useDispatch()
    let orange = useSelector(state => state.question.orangeQuestions)
    let index = useSelector(state => state.question.orangeQIndex)
    let turn = useSelector(state => state.turn.player)
    let piece = useSelector(state => state.squares.isPiece)
    
    let questions = []
    questions = [...orange]
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
        dispatch(nextOrange())
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

export default Orange