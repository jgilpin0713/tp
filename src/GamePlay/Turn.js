import React from "react"
import { useSelector} from "react-redux"
import GetQuestions from "./GetQuestions"
import MovePiece from "./MovePieces"


function Turn(){
    //let dispatch = useDispatch()
    //let turn = useSelector(state => state.turn.player)
    let action1 = useSelector(state => state.player1.action)
    let moves = useSelector(state => state.dice.movesLeft) // 4
    let color1 = useSelector(state => state.player1.squareColor)
    let color2 = useSelector(state => state.player2.squareColor)
    console.log(action1, moves, color1, color2)
    
    while(moves> 0){
        return (
            <div>
                <h3>You have moves left</h3>
                <MovePiece />
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