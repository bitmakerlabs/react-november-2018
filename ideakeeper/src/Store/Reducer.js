const initialState = {
    selectedUser: null
}

const Reducer = (state=initialState, action) =>{
    if(action.type === "USER"){
        let stateObj = Object.assign(state); //duplicate obj without ref
        return{
            ...stateObj,
            selectedUser :action.payload
        }
    }

    if(action.type === "CLEAN"){
        return{
             selectedUser :null
        }
    }


    return state;
}

export default Reducer;