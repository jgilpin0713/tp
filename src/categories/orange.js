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