import { BLUE_SQUARE, GRAY_SQUARE, GREEN_SQUARE, NOT_BOARD, ORANGE_SQUARE, PINK_SQUARE, PLAYER_PIECE, 
    PURPLE_SQUARE, TURN_END, WHITE_SQUARE, YELLOW_SQUARE } from "../actions/actiontypes"


const INITIAL_STATE = {
    "isActive": true, 
    "isPiece": false,
    "isPlayable": true, 
    "color": "pink"
}

function squareReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case TURN_END:
            return{...state, isActive:true }
        case PLAYER_PIECE:
            return{...state, isPiece:true }
        case NOT_BOARD:
            return{...state, isPlayable:false}
        case BLUE_SQUARE:
            return{...state, color: "blue" }
        case YELLOW_SQUARE:
            return{...state, color: "yellow" }
        case GREEN_SQUARE:
            return{...state, color: "green" }
        case PINK_SQUARE:
            return{...state, color: "pink" }
        case PURPLE_SQUARE:
            return{...state, color: "purple" }
        case ORANGE_SQUARE:
            return{...state, color: "orange" }
        case WHITE_SQUARE:
            return{...state, color: "white" }
        case GRAY_SQUARE:
            return{...state, color: "gray" }
        default:
            return state
    }
}

export default squareReducer