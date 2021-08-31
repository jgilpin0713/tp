import { ROLL, MOVE, GET_QUESTION, ANSWER, COLLECT_PIECE, MOVE_DOWN, MOVE_DOWN_LEFT, MOVE_DOWN_RIGHT, MOVE_LEFT, MOVE_RIGHT, MOVE_UP, MOVE_UP_LEFT, MOVE_UP_RIGHT } from "../actions/actiontypes";


const INITIAL_STATE = {
    "squareColor":"white",
    "col": 7,
    "row": 7,
    "movesLeft":0,
    "colorsWon":["blue", "pink", "purple"],
    "action": "Get"
}

function player1Reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case MOVE_LEFT:
            return {...state, col: state - 1, movesLeft: state - 1}
        case MOVE_RIGHT:
            return {...state, row: state + 1, movesLeft: state - 1};
        case MOVE_UP:
            return {...state, col: state + 1, movesLeft: state - 1}
        case MOVE_DOWN:
            return {...state, col: state + 1, movesLeft: state - 1}
        case MOVE_DOWN_LEFT:
            return {...state, row: state - 1, col: state - 1 ,movesLeft: state - 1}
        case MOVE_DOWN_RIGHT:
            return {...state, row: state + 1, col: state - 1 ,movesLeft: state - 1}
        case MOVE_UP_LEFT:
            return {...state, row: state - 1, col: state + 1 ,movesLeft: state - 1}
        case MOVE_UP_RIGHT:
            return {...state, row: state + 1, col: state + 1 ,movesLeft: state - 1}
        case COLLECT_PIECE:
            return {...state, colorsWon: [..."colorsWon", "squareColor"]}
        case ROLL:
            return {...state, action: "Roll"}
        case ANSWER:
            return {...state, action: "Answer"}
        case GET_QUESTION:
            return {...state, action: "Get"}
        case MOVE:
            return {...state, action: "Move"}
        default:
            return state
    }
}

export default player1Reducer