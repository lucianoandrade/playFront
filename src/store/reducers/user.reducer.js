const INIT_STATE = {
    data: {},
    consoles: [],
    isLoading: false,
    error: false
}

const user = (state = INIT_STATE, action) => {
    switch (action.type){
        case "REQUEST_USER": 
        return {
            ...state,
            isLoading: true
        };
        case "SUCCESS_USER": 
        return {
            ...state,
            isLoading: false,
            data: action.payload
        };
        case "SET_USER": 
        return {
            ...state,
            data: action.payload
        };
        case "SET_USER_CONSOLES": 
        return {
            ...state,
            consoles: action.payload
        };
        case "SET_USER_IMAGE": 
        return {
            ...state,
            data: {
                ...state.data,
                user: {...state.data.user, profile_image: action.payload}
            }
        };
        case "REMOVE_USER": 
        return {
            ...state,
            data: {},
            consoles: []
        };
        default: 
        return state
    }
}




export default user;