import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            // const newState = Object.assign({}, state)
            // newState.counter = state.counter + 1
            // return newState
            return updateObject(state, {counter: state.counter + 1})
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1})
            // return {
            //     ...state,
            //     counter: state.counter - 1
            // }
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.value})
            // return {
            //     ...state,
            //     counter: state.counter + action.value
            // }
        case actionTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value})
            // return {
            //     ...state,
            //     counter: state.counter - action.value
            // }
        
    }
        
    return state
}

export default reducer;