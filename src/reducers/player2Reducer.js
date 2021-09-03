import { MOVES_LEFT2, ROLL2, MOVE2, GET_QUESTION2, COLLECT_PIECE2, MOVE_DOWN2, MOVE_DOWN_LEFT2, MOVE_DOWN_RIGHT2, MOVE_LEFT2, MOVE_RIGHT2, MOVE_UP2, MOVE_UP_LEFT2, MOVE_UP_RIGHT2, GET_COLOR2, IS_NOT_INITIAL2 } from "../actions/actiontypes";


const INITIAL_STATE = {
    "squareColor2":"white",
    "col2": 6,
    "row2": 6,
    "movesLeft2":0,
    "colorsWon2":[],
    "action2": "Roll",
    "isInitial2": true
}

function player2Reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case MOVES_LEFT2:
            return{...state, movesLeft2: action.payload}
        case MOVE_LEFT2:
            return {...state, row2: state.row2 - 1, movesLeft2: state.movesLeft2 - 1}
        case MOVE_RIGHT2:
            return {...state, row2: state.row2 + 1, movesLeft2: state.movesLeft2 - 1};
        case MOVE_UP2:
            return {...state, col2: state.col2 - 1, movesLeft2: state.movesLeft2 - 1}
        case MOVE_DOWN2:
            return {...state, col2: state.col2 + 1, movesLeft2: state.movesLeft2 - 1}
        case MOVE_DOWN_LEFT2:
            return {...state, col2: state.col2 + 1, row2: state.row2 - 1 ,movesLeft2: state.movesLeft2 - 1}
        case MOVE_DOWN_RIGHT2:
            return {...state, col2: state.col2 + 1, row2: state.row2 + 1 ,movesLeft2: state.movesLeft2 - 1}
        case MOVE_UP_LEFT2:
            return {...state, col2: state.col2 - 1, row: state.row2 - 1 ,movesLeft2: state.movesLeft2 - 1}
        case MOVE_UP_RIGHT2:
            return {...state, col: state.col2 - 1, row: state.row2 + 1 ,movesLeft2: state.movesLeft2 - 1}
        case COLLECT_PIECE2:
            return {...state, colorsWon: [...state.colorsWon2, state.squareColor2], action2: "Roll"}
        case ROLL2:
            return {...state, action2: "Roll"}
        case GET_COLOR2:
            return {...state, squareColor2: action.payload}
        case GET_QUESTION2:
            return {...state, action2: "Get"}
        case MOVE2:
            return {...state, action2: "Move"}
        case IS_NOT_INITIAL2:
            return {...state, isInitial2: false}
        default:
            return state
    }
}

export default player2Reducer