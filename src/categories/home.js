import React from "react"
import { useSelector } from "react-redux"
import Blue from "../categories/blue"
import Orange from "../categories/orange"
import Purple from "../categories/purple"
import Green from "../categories/green"
import Pink from "../categories/pink"
import Yellow from "../categories/yellow"

function Home(){
    //if color selected
    let color = useSelector(state => state.player1.squareColor)
    // need to change this when I decide how to do the pick a color option
    if (color === "blue"){
        return(
          <Blue />  
        )
        
    } else if (color === "orange"){
        return(
            <Orange />  
          )
    }
    else if (color === "purple"){
        return(
            <Purple />  
          )
    }
    else if (color === "yellow"){
        return(
            <Yellow />  
          )
    }
    else if (color === "green"){
        return(
            <Green />  
          )
    }
    else if (color === "pink"){
        return(
            <Pink />  
          )
    }else {
      return(
        null
    )
    }
}

export default Home