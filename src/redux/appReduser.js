import { getAuth } from "./authReduser";

const INITIALIZED_SUCCES= 'INITIALIZED_SUCCES';

let initialState = {
    initialized: false
}

export const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return {
                ...state,
                initialized: true           
            };
            
        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCES} );

//thunk
export const initializeApp = () => {
  
    return (dispatch) => {
      
        let promise =  dispatch(getAuth());
        Promise.all([promise])
        .then(()=>{
            dispatch(initializedSuccess())
        })       
    }
}


export default appReduser;