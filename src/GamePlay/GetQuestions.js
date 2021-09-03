import React from "react"
import Blue from "../categories/blue"
import Orange from "../categories/orange"
import Purple from "../categories/purple"
import Green from "../categories/green"
import Pink from "../categories/pink"
import Yellow from "../categories/yellow"
import RollAgain from "../categories/rollAgain"
import Home from "../categories/home"
import {useSelector} from "react-redux"



function GetQuestions(){
    let color1 = useSelector(state => state.player1.squareColor1)
    let color2 = useSelector(state => state.player2.squareColor2)
    let action11 = useSelector(state => state.player1.action1)
    let action22 = useSelector(state => state.player2.action2)
    let turn = useSelector(state => state.turn.player)
      
    if (turn === 1 && action11 === "Get"){
      if (color1 === "blue" ){
            return(
                <Blue />
            )
      } else if (color1 === "orange" && action11 === "Get"){
        return(
          <Orange />  
        )
      } else if (color1 === "Purple" && action11 === "Get"){
        return(
          <Purple />
        )
      } else if (color1 === "yellow" && action11 === "Get"){
        return(
          <Yellow />
        )
      } else if (color1 === "green" && action11 === "Get"){
        return (
          <Green />
        )
      } else if (color1 === "pink" && action11 === "Get"){
        return (
          <Pink />
        )
      } else if (color1 === "gray"){
        return (
          <RollAgain />
        )
      } else if (color1 === "white" || color1 === "orchid"){
        return(
          <Home />
        )
      }
    }else if(turn === 2 && action22 === "Get") {
      if (color2 === "blue" ){
        return(
          <Blue />
          )
      } else if (color2 === "orange" && action22 === "Get"){
        return(
          <Orange />  
        )
      } else if (color2 === "Purple" && action22 === "Get"){
        return(
          <Purple />
        )
      } else if (color2 === "yellow" && action22 === "Get"){
        return(
          <Yellow />
        )
      } else if (color2 === "green" && action22 === "Get"){
        return (
          <Green />
        )
      } else if (color2 === "pink" && action22 === "Get"){
        return (
          <Pink />
        )
      } else if (color2 === "gray"){
        return (
          <RollAgain />
        )
      } else if (color2 === "white" || color2 === "orchid"){
        return(
          <Home />
        )
      }
    } else {
      return(
        <div>
          <h3>Your Question: </h3>
        </div>
      )
    }
}

export default GetQuestions