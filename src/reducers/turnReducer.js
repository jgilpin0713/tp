import { MAKE_BOARD, TO_PLAYER1, TO_PLAYER2 } from "../actions/actiontypes";

const INITIAL_STATE = {
    "player":1,
    "player1Color": "blue",
    "player2Color": "yellow",
    "board": []
}
function turnReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case TO_PLAYER1:
            return {...state, player:1}
        case TO_PLAYER2:
            return {...state, player:1}
        case MAKE_BOARD:
            return{...state, board:action.payload}
        default:
            return state
    }
}

export default turnReducer