const requestUser = () => (
    {
        type: 'REQUEST_USER'
    }
)

const successUser = (payload) => (
    {
        type: 'SUCCESS_USER',
        payload: payload
    }
)

const errorUser = (payload) => (
    {
        type: 'ERROR_USER',
        payload: payload
    }
)

const setUser = (payload) => (
    {
        type: "SET_USER",
        payload: payload
    }
)

const setUserConsoles = (payload) => (
    {
        type: "SET_USER_CONSOLES",
        payload: payload
    }
) 

const removeUser = () => (
    {
        type: "REMOVE_USER"
    }
) 

export const getUser = () => (dispatch) => {
    dispatch(requestUser())
    dispatch(successUser("vrau"))
    dispatch(errorUser("ERRO"))
}

export const setUserData = (user) => (dispatch) => {
    dispatch(setUser(user))
}

export const setUserImage = (image) => (dispatch) => {
    dispatch({
        type: "SET_USER_IMAGE",
        payload: image
    })
}

export const setConsoles = (consoles) => (dispatch) => {
    dispatch(setUserConsoles(consoles))
}

export const removeUserData = () => (dispatch) => {
    dispatch(removeUser())
}