import React from "react"
import { useSelector } from "react-redux"
import Orange from "../categories/orange"
import Blue from "../categories/blue"
import Green from "../categories/green"
import Pink from "../categories/pink"
import Purple from "../categories/purple"
import Yellow from "../categories/yellow"

function QuestionCard(){
    let squareColor = useSelector(state => state.squares.color)
    let isActive = useSelector(state => state.squares.isActive)
    let toAnswer1 = useSelector(state => state.player1.action)
    let toAnswer2 = useSelector(state => state.player2.action)
    //let orange = useSelector(state => state.question.orangeQIndex )
    //console.log(orange)
    
    console.log(squareColor)
    //console.log(isActive)
    //console.log(toAnswer)

    if (isActive && squareColor === "orange"&& (toAnswer1 === "Get" || toAnswer2 === "Get")){
        return (
            <div>
                <h4>Your question: </h4>
                <Orange />
            </div>
            
        )
    } else if (isActive && squareColor === "blue"&& (toAnswer1 === "Get" || toAnswer2 === "Get")) {
        return (
            <div>
                <h4>Your question: </h4>
                <Blue />
            </div>
            
        )
    } else if (isActive && squareColor === "pink"&& (toAnswer1 === "Get" || toAnswer2 === "Get")) {
        return (
            <div>
                <h4>Your question: </h4>
                <Pink />
            </div>
            
        )
    } else if (isActive && squareColor === "purple"&& (toAnswer1 === "Get" || toAnswer2 === "Get")) {
        return (
            <div>
                <h4>Your question: </h4>
                <Purple />
            </div>
            
        ) 
    } else if (isActive && squareColor === "green"&& (toAnswer1 === "Get" || toAnswer2 === "Get")) {
        return (
            <div>
                <h4>Your question: </h4>
                <Green />
            </div>
            
        ) 
    } else if (isActive && squareColor === "yellow"&& (toAnswer1 === "Get" || toAnswer2 === "Get")) {
        return (
            <div>
                <h4>Your question: </h4>
                <Yellow />
            </div>
            
        )  
    } else {
      return(
        <div>
            <h4>Your question: </h4>
        </div>
    )  
    }
    
}

export default QuestionCard