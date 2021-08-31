import { FETCH_BLUE, FETCH_GREEN, FETCH_ORANGE, FETCH_PINK, FETCH_PURPLE, FETCH_YELLOW, ERROR, 
    NEXT_BLUE_INDEX, NEXT_GREEN_INDEX, NEXT_YELLOW_INDEX, NEXT_ORANGE_INDEX, NEXT_PINK_INDEX, NEXT_PURPLE_INDEX } from "../actions/actiontypes";


const INITIAL_STATE = {
    "orangeQuestions": [],
    "orangeQIndex": 0,
    "blueQuestions": [],
    "blueQIndex": 0,
    "yellowQuestions": [],
    "yellowQIndex": 0,
    "pinkQuestions": [],
    "pinkQIndex": 0,
    "purpleQuestions": [],
    "purpleQIndex": 0,
    "greenQuestions": [],
    "greenQIndex": 0,
    "error":false
};

function questionReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_ORANGE:
            return {...state, orangeQuestions:action.payload};
        case FETCH_BLUE:
            return {...state, blueQuestions:action.payload};
        case FETCH_GREEN:
            return {...state, greenQuestions:action.payload};
        case FETCH_PINK:
            return {...state, pinkQuestions:action.payload};
        case FETCH_PURPLE:
            return {...state, purpleQuestions:action.payload};
        case FETCH_YELLOW:
            return {...state, yellowQuestions:action.payload};
        case ERROR:
            return {...state, error:true}
        case NEXT_BLUE_INDEX:
            return {...state, blueQIndex: (state.blueQIndex + 1)}
        case NEXT_YELLOW_INDEX:
            return {...state, yellowQIndex: state.yellowQIndex + 1}
        case NEXT_GREEN_INDEX:
            return {...state, greenQIndex: state.greenQIndex + 1}
        case NEXT_ORANGE_INDEX:
            return {...state, orangeQIndex: state.orangeQIndex + 1}
        case NEXT_PINK_INDEX:
            return {...state, pinkQIndex: state.pinkQIndex + 1}
        case NEXT_PURPLE_INDEX:
            return {...state, purpleQIndex: state.purpleQIndex + 1}
        default:
            return state
    }
}

export default questionReducer