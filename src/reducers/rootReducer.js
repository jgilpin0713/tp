import { combineReducers } from "redux"
import diceReducer from "./diceReducer"
import player1Reducer from "./player1Reducer"
import questionReducer from "./questionReducer"
import squareReducer from "./squareReducer"
import turnReducer from "./turnReducer"
import player2Reducer from "./player2Reducer"


const rootReducer = combineReducers({
    dice: diceReducer,
    player1: player1Reducer,
    player2: player2Reducer,
    turn: turnReducer,
    question: questionReducer,
    squares: squareReducer
})

export default rootReducer