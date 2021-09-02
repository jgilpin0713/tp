import React from "react"
import { useSelector,} from "react-redux"
import GetQuestions from "./GetQuestions"
import MovePieces from "./MovePieces"



function Turn(){
    let turn = useSelector(state => state.turn.player)
    let action1 = useSelector(state => state.player1.action1)
    let action2 = useSelector(state => state.player2.action2)
    let moves1 = useSelector(state => state.player1.movesLeft1) // 4
    let moves2 = useSelector(state => state.player2.movesLeft2)
    let color1 = useSelector(state => state.player1.squareColor1)
    let color2 = useSelector(state => state.player2.squareColor2)
    console.log(action1, action2, moves1, moves2,  color1, color2)
    
    if (turn === 1 && moves1> 0 ){
        return (
            <div>
                <MovePieces />
            </div>
        )
    } 
    if (turn === 2 && moves2> 0 ){
        return (
            <div>
                <h3>You have moves left</h3>
                <MovePieces />
            </div>
        )
    }

    return(
        <div>
            <GetQuestions />
        </div>
    )

}
export default Turn