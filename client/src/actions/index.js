//need addSmurf function to pass to AddForm.js
//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.

import axios from 'axios';

export const GET_SMURFS_START = "GET_SMURFS_START"
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS"
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE"

export const ADD_SMURF_START = "ADD_SMURF_START"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE"

export const SHOW_FORM_ERROR = "SHOW_FORM_ERROR"



export const getSmurfsStart = () => {
    return {type: GET_SMURFS_START}
}
export const getSmurfsSuccess = (smurfs) => {
    return {type: GET_SMURFS_SUCCESS, payload: smurfs}
}
export const getSmurfsFailure = (error) => {
    return {type: GET_SMURFS_START, payload: error}
}


export const addSmurfStart = () => {
    return {type: ADD_SMURF_START}
}
export const addSmurfSuccess = (newSmurf) => {
    return {type: ADD_SMURF_START, payload: newSmurf}
}
export const addSmurfFailure = (error) => {
    return {type: ADD_SMURF_START, payload: error}
}


export const showFormError = (error) => {
    return {type: SHOW_FORM_ERROR, payload: error}
}



export const getSmurfs = ()=> (dispatch) => {
    dispatch({type:GET_SMURFS_START})
    // console.log("GET_SMURFS started")
    axios
        .get("http://localhost:3333/smurfs")
        .then( res => {
            // console.log('res', res.data)
            dispatch({type: GET_SMURFS_SUCCESS, payload: res.data})
        })
        .catch( err => {
            // console.log('err', err)
            dispatch({type: GET_SMURFS_FAILURE , payload: err})
        })
}

export const addSmurf = (newSmurf) => (dispatch) => {
    // console.log("ADDING SMURF: ", newSmurf);
    dispatch({type: ADD_SMURF_START})
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res =>{
            // console.log("addSmurf Res: ",res)
            dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
            })
        .catch(err => {
            // console.log("addSmurf Err: ",err)
            dispatch({type: ADD_SMURF_FAILURE, payload: err})
            })

}

