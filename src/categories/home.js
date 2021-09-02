import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {getColor, getColor2} from "../actions/actionCreators"

function Home(){
  let dispatch = useDispatch()
  let turn = useSelector(state => state.turn.player)
        function handlePink(){
          if(turn === 1){
            return(
              dispatch(getColor("pink"))
            )
          } else {
            return (
            dispatch(getColor2("pink"))
            )
        }
      }
      function handleOrange(){
        if(turn === 1){
          return(
            dispatch(getColor("orange"))
          )
        } else {
          return (
          dispatch(getColor2("orange"))
          )
      }
    }
    function handleBlue(){
      if(turn === 1){
        return(
          dispatch(getColor("blue"))
        )
      } else {
        return (
        dispatch(getColor2("blue"))
        )
    }
    }
      function handleGreen(){
        if(turn === 1){
          return(
            dispatch(getColor("green"))
          )
        } else {
          return (
          dispatch(getColor2("green"))
          )
      }
    }
      function handleYellow(){
        if(turn === 1){
          return(
            dispatch(getColor("yellow"))
          )
        } else {
          return (
          dispatch(getColor2("yellow"))
          )
      }
    }

    function handlePurple(){
      if(turn === 1){
        return(
          dispatch(getColor("purple"))
        )
      } else {
        return (
        dispatch(getColor2("purple"))
        )
    }
  }
      return(
        <div>
          <button onClick = {handlePink}> Pink </button>
          <button onClick = {handleBlue}> Blue </button>
          <button onClick = {handleOrange}> Orange </button>
          <button onClick = {handleGreen}> Green </button>
          <button onClick = {handleYellow}> Yellow </button>
          <button onClick = {handlePurple}> Purple </button>
        </div>
    )
}

export default Home