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


    if ((color1 === "blue" || color2 === "blue") && (action11 === "Get" || action22 === "Get")){
        return(
          <Blue />  
        )
        
    } else if ((color1 === "orange" || color2 === "orange")&& (action11 === "Get" || action22 === "Get")){
        return(
            <Orange />  
          )
    }
    else if ((color1 === "purple" || color2 === "purple") && (action11 === "Get" || action22 === "Get")){
        return(
            <Purple />  
          )
    }
    else if ((color1 === "yellow" || color2 === "yellow") && (action11 === "Get" || action22 === "Get")){
        return(
            <Yellow />  
          )
    }
    else if ((color1 === "green" || color2 === "green") && (action11 === "Get" || action22 === "Get")){
        return(
            <Green />  
          )
    }
    else if ((color1 === "pink" || color2 === "pink") && (action11 === "Get" || action22 === "Get")){
        return(
            <Pink />  
          )
    }
    else if ((color1 === "gray" || color2 === "gray") && (action11 === "Get" || action22 === "Get")){
        return(
            <RollAgain />  
          )
    }
    else if ((color1 === "white" || color1 === "orchid" || color2 === "white" || color2 === "orchid") && (action11 === "Get" || action22 === "Get")){
        return(
            <Home />  
          )
    }else {
      return(
        <div>
          <h3>Your Question:</h3>
        </div>
      )
    }
}

export default GetQuestions