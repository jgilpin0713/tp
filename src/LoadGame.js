import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {fetchBlue, fetchGreen, fetchOrange, fetchPink, fetchPurple, fetchYellow} from "./actions/actionCreators"

function LoadGame(){

    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(fetchOrange())
    }, [dispatch])

    useEffect (() => {
        dispatch(fetchBlue())
    }, [dispatch])

    useEffect (() => {
        dispatch(fetchGreen())
    }, [dispatch])

    useEffect (() => {
        dispatch(fetchYellow())
    }, [dispatch])

    useEffect (() => {
        dispatch(fetchPink())
    }, [dispatch])

    useEffect (() => {
        dispatch(fetchPurple())
    }, [dispatch])

    return (
        <div>
           <h1>Loading ... </h1> 
        </div> 
    )
}

export default LoadGame