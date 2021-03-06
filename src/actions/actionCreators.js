import { MOVES_LEFT, GET_COLOR, BLUE_SQUARE, ERROR, FETCH_BLUE, FETCH_GREEN, FETCH_ORANGE, FETCH_PINK, FETCH_PURPLE, 
    FETCH_YELLOW, GET_QUESTION, GRAY_SQUARE, GREEN_SQUARE, MOVE, MOVE_DOWN, MOVE_DOWN_LEFT, MOVE_DOWN_RIGHT, MOVE_LEFT, 
    MOVE_RIGHT, MOVE_UP, MOVE_UP_LEFT, MOVE_UP_RIGHT, NEXT_ORANGE_INDEX, NOT_BOARD, ORANGE_SQUARE, PINK_SQUARE, PLAYER_PIECE, PURPLE_SQUARE, 
    ROLL, ROLL_DICE, TO_PLAYER1, TO_PLAYER2,  WHITE_SQUARE, YELLOW_SQUARE, COLLECT_PIECE, NEXT_PINK_INDEX, NEXT_BLUE_INDEX,
    NEXT_GREEN_INDEX, NEXT_PURPLE_INDEX, NEXT_YELLOW_INDEX, MAKE_BOARD, MOVE_DOWN_RIGHT2, MOVE_UP2, MOVE_DOWN2, MOVE_UP_RIGHT2, 
    MOVE_DOWN_LEFT2, MOVE_UP_LEFT2, MOVE_LEFT2, COLLECT_PIECE2, MOVES_LEFT2, GET_COLOR2, MOVE2, ROLL2, ROLL_DICE2, IS_NOT_INITIAL1, 
    IS_NOT_INITIAL2, GET_QUESTION2 } from "./actiontypes";
import axios from "axios"
const BASE_API_URL = "https://opentdb.com/api.php?amount=50&category=";



export function rollDice(dice){
    return {
        type:ROLL_DICE,
        payload: dice
    }
}
export function rollDice2(dice){
    return {
        type:ROLL_DICE2,
        payload: dice
    }
}

export function movesLeft(dice){
    return{
        type:MOVES_LEFT,
        payload: dice
    }
}
export function movesLeft2(dice){
    return{
        type:MOVES_LEFT2,
        payload: dice
    }
}

export const gotOrange = questions => 
    ({ type:FETCH_ORANGE, payload: [...questions]})


export const fetchOrange = () => {
    return (dispatch) => {
        return axios.get(`${BASE_API_URL}21`)
        .then(response => {
            return response.data
        })
        .then(data => {
            dispatch(gotOrange(data.results))
        })
        .catch(error => {
            dispatch(getError(error))
        })
    }
}
export function nextOrange(){
    return {
        type:NEXT_ORANGE_INDEX
    }
}

export const gotPink = questions => 
    ({ type:FETCH_PINK, payload: [...questions]})


export const fetchPink = () => {
    return (dispatch) => {
        return axios.get(`${BASE_API_URL}12`)
        .then(response => {
            return response.data
        })
        .then(data => {
            dispatch(gotPink(data.results))
        })
        .catch(error => {
            dispatch(getError(error))
        })
    }
}
export function nextPink(){
    return {
        type:NEXT_PINK_INDEX
    }
}


export const gotPurple = questions => 
    ({ type:FETCH_PURPLE, payload: [...questions]})


export const fetchPurple = () => {
    return (dispatch) => {
        return axios.get(`${BASE_API_URL}10`)
        .then(response => {
            return response.data
        })
        .then(data => {
            dispatch(gotPurple(data.results))
        })
        .catch(error => {
            dispatch(getError(error))
        })
    }
}
export function nextPurple(){
    return {
        type:NEXT_PURPLE_INDEX
    }
}


export const gotGreen = questions => 
    ({ type:FETCH_GREEN, payload: [...questions]})


export const fetchGreen = () => {
    return (dispatch) => {
        return axios.get(`${BASE_API_URL}17`)
        .then(response => {
            return response.data
        })
        .then(data => {
            dispatch(gotGreen(data.results))
        })
        .catch(error => {
            dispatch(getError(error))
        })
    }
}
export function nextGreen(){
    return {
        type:NEXT_GREEN_INDEX
    }
}


export const gotBlue = questions => 
    ({ type:FETCH_BLUE, payload: [...questions]})


export const fetchBlue = () => {
    return (dispatch) => {
        return axios.get(`${BASE_API_URL}22`)
        .then(response => {
            return response.data
        })
        .then(data => {
            dispatch(gotBlue(data.results))
        })
        .catch(error => {
            dispatch(getError(error))
        })
    }
}
export function nextBlue(){
    return {
        type:NEXT_BLUE_INDEX
    }
}


export const gotYellow = questions => 
    ({ type:FETCH_YELLOW, payload: [...questions]})


export const fetchYellow = () => {
    return (dispatch) => {
        return axios.get(`${BASE_API_URL}23`)
        .then(response => {
            return response.data
        })
        .then(data => {
            dispatch(gotYellow(data.results))
        })
        .catch(error => {
            dispatch(getError(error))
        })
    }
}
export function nextYellow(){
    return {
        type:NEXT_YELLOW_INDEX
    }
}


export function player1(){
    return {
        type:TO_PLAYER1
    }
}
export function player2(){
    return {
        type:TO_PLAYER2
    }
}


export function playerPiece(){
    return{
        type:PLAYER_PIECE
    }
}

export function notOnBoard(){
    return{
        type:NOT_BOARD
    }
}

export function blueSquare(){
    return{
        type:BLUE_SQUARE
    }
}

export function yellowSquare(){
    return{
        type:YELLOW_SQUARE
    }
}

export function greenSquare(){
    return{
        type:GREEN_SQUARE
    }
}

export function pinkSquare(){
    return{
        type:PINK_SQUARE
    }
}

export function purpleSquare(){
    return{
        type:PURPLE_SQUARE
    }
}

export function whiteSquare(){
    return{
        type:WHITE_SQUARE
    }
}

export function graySquare(){
    return{
        type:GRAY_SQUARE
    }
}

export function orangeSquare(){
    return{
        type:ORANGE_SQUARE
    }
}

export function moveLeft(){
    return{
        type:MOVE_LEFT
    }
}

export function moveUpLeft(){
    return{
        type:MOVE_UP_LEFT
    }
}

export function moveDownLeft(){
    return{
        type:MOVE_DOWN_LEFT
    }
}

export function moveRight(){
    return{
        type:MOVE_RIGHT
    }
}

export function moveUpRight(){
    return{
        type:MOVE_UP_RIGHT
    }
}

export function moveDownRight(){
    return{
        type:MOVE_DOWN_RIGHT
    }
}

export function moveUp(){
    return{
        type:MOVE_UP
    }
}

export function moveDown(){
    return{
        type:MOVE_DOWN
    }
}

export function getError(){
    return{
        type:ERROR
    }
}

export function roll(){
    return{
        type:ROLL
    }
}

export function move(){
    return{
        type:MOVE
    }
}

export function getColor(color){
    return{
        type:GET_COLOR,
        payload: color
    }
}

export function questions(){
    return{
        type:GET_QUESTION
    }
}

export function questions2(){
    return{
        type:GET_QUESTION2
    }
}

export function collectPiece(){
    return{
        type:COLLECT_PIECE
    }
}

export function makeBoard(squares){
    return{
        type:MAKE_BOARD,
        payload: [...squares]
    }
}

export function moveLeft2(){
    return{
        type:MOVE_LEFT2
    }
}

export function moveUpLeft2(){
    return{
        type:MOVE_UP_LEFT2
    }
}

export function moveDownLeft2(){
    return{
        type:MOVE_DOWN_LEFT2
    }
}

export function moveRight2(){
    return{
        type:MOVE_UP_RIGHT2
    }
}

export function moveUpRight2(){
    return{
        type:MOVE_UP_RIGHT2
    }
}

export function moveDownRight2(){
    return{
        type:MOVE_DOWN_RIGHT2
    }
}

export function moveUp2(){
    return{
        type:MOVE_UP2
    }
}

export function moveDown2(){
    return{
        type:MOVE_DOWN2
    }
}
export function collectPiece2(){
    return{
        type:COLLECT_PIECE2
    }
}

export function getColor2(color){
    return{
        type:GET_COLOR2,
        payload: color
    }
}

export function roll2(){
    return{
        type:ROLL2
    }
}

export function move2(){
    return{
        type:MOVE2
    }
}

export function isNotInitial1(){
    return {
        type: IS_NOT_INITIAL1
    }
}
export function isNotInitial2(){
    return {
        type: IS_NOT_INITIAL2
    }
}