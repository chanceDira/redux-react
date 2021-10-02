import * as actionTypes from '../actions/actionTypes'
import { updateObject  } from '../utility'

const initialState = {
    results: []
}

const deleteResult = (state, action) => {  //Helper function
    const updatedArray = state.results.filter(result => result.id !== action.resultElId)
    return updateObject(state, {results: updatedArray})
}

const reducer = (state = initialState, action) => { //reducer runs synchronously
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // You change data here in reducer, if you want
            // return {
            //     ...state,
            //     results: state.results.concat({id: new Date(), value: action.result * 2})  // value: state.counter //immutable way of adding adding item somehow similar to push
            // }
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result * 2}) })
        case actionTypes.DELETE_RESULT:
            // const id = 2
            // const newArray = [...state.results]
            // newArray.splice(id, 1)
            // const updatedArray = state.results.filter(result => result.id !== action.resultElId)    //filter return the new array
            // return {
            //     ...state,
            //     // results: newArray
            //     results: updatedArray
            // }
            // return updateObject(state, {results: updatedArray})
            return deleteResult(state, action)
        
    }
        
    return state
}

export default reducer;