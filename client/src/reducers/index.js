import {
    ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE,
    GET_SMURFS_START, GET_SMURFS_FAILURE, GET_SMURFS_SUCCESS,
    SHOW_FORM_ERROR
} from '../actions/index'


export const initialState = {
    smurfs: [],
    isLoading: false,
    error: "",
}
    



const reducer = (state = initialState, action) => {
switch(action.type){
    // GET SMURFS
    case GET_SMURFS_START:
        return{
            ...state,
            isLoading: true
        }
    case GET_SMURFS_SUCCESS:
        return{
            ...state,
            isLoading: false,
            smurfs:action.payload
        }
    case GET_SMURFS_FAILURE:
        return{
            ...state,
            isLoading: false,
            error: action.payload
        }
    //ADD SMURF
    case ADD_SMURF_START:
        return{
            ...state,
            isLoading: true
        }
    case ADD_SMURF_SUCCESS:
        return{
            ...state,
            isLoading: false,
            smurfs:[...state.smurfs,
                    action.payload]
        }
    case ADD_SMURF_FAILURE:
        return{
            ...state,
            isLoading: false,
            error: action.payload
        }
    case SHOW_FORM_ERROR:
        return{
            ...state,
            error: action.payload
        }
        default:
            return state
}

}

export default reducer;

//Task List:
//x1. Add in the initialState needed to hold: 
//      x- an array of smurfs
//      x- a boolean indicating if the app is loading
//     x - error text
//x2.x Setup your reducer to take the state and action as peremeters
//x3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary