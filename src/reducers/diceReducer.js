import {  ROLL_DICE } from "../actions/actiontypes"

const INITIAL_STATE = {
    "roll": 1,
}

function diceReducer(state = INITIAL_STATE, action){
    //const dice = Math.floor(Math.random()*6 + 1) //do I need to put this in the case? Or does that work?
    switch(action.type){
        case ROLL_DICE:
            return{...state, roll: action.payload}
        default:
            return state;
    }
}
export default diceReducer