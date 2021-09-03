import { MOVES_LEFT, ROLL, MOVE, GET_QUESTION, GET_COLOR, COLLECT_PIECE, MOVE_DOWN, MOVE_DOWN_LEFT, MOVE_DOWN_RIGHT, MOVE_LEFT, 
    MOVE_RIGHT, MOVE_UP, MOVE_UP_LEFT, MOVE_UP_RIGHT, IS_NOT_INITIAL1 } from "../actions/actiontypes";


const INITIAL_STATE = {
    "squareColor1":"white",
    "col1": 6,
    "row1": 6,
    "movesLeft1": 0,
    "colorsWon1":[],
    "action1": "Roll",
    "isInitial1": true
}

function player1Reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case MOVES_LEFT:
            return{...state, movesLeft1: action.payload}
        case MOVE_LEFT:
            return {...state, row1: state.row1 - 1, movesLeft1: state.movesLeft1 - 1}
        case MOVE_RIGHT:
            return {...state, row1: state.row1 + 1, movesLeft1: state.movesLeft1 - 1};
        case MOVE_UP:
            return {...state, col1: state.col1 - 1, movesLeft1: state.movesLeft1 - 1}
        case MOVE_DOWN:
            return {...state, col1: state.col1 + 1, movesLeft1: state.movesLeft1 - 1}
        case MOVE_DOWN_LEFT:
            return {...state, col1: state.col1 + 1, row1: state.row1 - 1 ,movesLeft1: state.movesLeft1 - 1}
        case MOVE_DOWN_RIGHT:
            return {...state, col1: state.col1 + 1, row1: state.row1 + 1 ,movesLeft1: state.movesLeft1 - 1}
        case MOVE_UP_LEFT:
            return {...state, col1: state.col1 - 1, row1: state.row1 - 1 ,movesLeft1: state.movesLeft1 - 1}
        case MOVE_UP_RIGHT:
            return {...state, col1: state.col1 - 1, row1: state.row1 + 1 ,movesLeft1: state.movesLeft1 - 1}
        case COLLECT_PIECE:
            return {...state, colorsWon1: [...state.colorsWon1, state.squareColor1], action1: "Roll"}
        case ROLL:
            return {...state, action1: "Roll"}
        case GET_COLOR:
            return {...state, squareColor1: action.payload}
        case GET_QUESTION:
            return {...state, action1: "Get"}
        case MOVE:
            return {...state, action1: "Move"}
        case IS_NOT_INITIAL1:
            return {...state, isInitial1: false}
        default:
            return state
    }
}

export default player1Reducer