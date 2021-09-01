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
    let color1 = useSelector(state => state.player1.squareColor)
    let color2 = useSelector(state => state.player2.squareColor)

    if (color1 === "blue" || color2 === "blue"){
        return(
          <Blue />  
        )
        
    } else if (color1 === "orange" || color2 === "orange"){
        return(
            <Orange />  
          )
    }
    else if (color1 === "purple" || color2 === "purple"){
        return(
            <Purple />  
          )
    }
    else if (color1 === "yellow" || color2 === "yellow"){
        return(
            <Yellow />  
          )
    }
    else if (color1 === "green" || color2 === "green"){
        return(
            <Green />  
          )
    }
    else if (color1 === "pink" || color2 === "pink"){
        return(
            <Pink />  
          )
    }
    else if (color1 === "gray" || color2 === "gray"){
        return(
            <RollAgain />  
          )
    }
    else if (color1 === "white" || color1 === "orchid" || color2 === "white" || color2 === "orchid"){
        return(
            <Home />  
          )
    }
}

export default GetQuestions