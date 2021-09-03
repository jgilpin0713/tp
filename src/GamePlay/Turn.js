import React from "react"
import { useSelector,} from "react-redux"
import GetQuestions from "./GetQuestions"
import MovePieces from "./MovePieces"


function Turn(){
    let status1 = useSelector(state => state.player1.action1)
    let status2 = useSelector(state => state.player2.action2)

    if(status1 === "Move"){
        return (
            <MovePieces />
        )
    } else if(status2 === "Move"){
        return(
            <MovePieces />
        )
    } else if (status1 === "Get"){
        return(
            <GetQuestions />
        )
    } else if (status2 === "Get"){
        return(
            <GetQuestions />
        )
    } else {
        return (
            <h3>Rolling...</h3>
        )
    }
    
}
export default Turn