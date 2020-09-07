import axios from "axios"

// https://github.com/erikras/ducks-modular-redux

// Constants
const initialData = {
    fetching: false
}

const SIGNUP = "SIGNUP"
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
const SIGNUP_ERROR = "SIGNUP_ERROR"

const EMAIL_VALIDATION = "EMAIL_VALIDATION"
const EMAIL_VALIDATION_SUCCESS = "EMAIL_VALIDATION_SUCCESS"
const EMAIL_VALIDATION_ERROR = "EMAIL_VALIDATION_ERROR"

const SIGNUP_URL = "https://api.raisely.com/v3/signup"
const VALIDATE_EMAIL_URL = "https://api.raisely.com/v3/check-user"

// Reducer
export default function reducer(state = initialData, action) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                fetching: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                fetching: false,
                response: action.payload
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                fetching: false,
                response: action.payload
            }
        case EMAIL_VALIDATION:
            return {
                ...state,
                fetching: true
            }
        case EMAIL_VALIDATION_SUCCESS:
            return {
                ...state,
                fetching: false,
                response: action.payload
            }
        case EMAIL_VALIDATION_ERROR:
            return {
                ...state,
                fetching: false,
                response: action.payload
            }
        default:
            return state
    }
}

// Actions
export let signUpAction = (body) => (dispatch, getState) => {
    dispatch({ type: SIGNUP })
    
    axios.post(SIGNUP_URL, body)
        .then(({ data }) => {
            dispatch({ 
                type: SIGNUP_SUCCESS,
                payload: {
                    message: data.message,
                    type: 'success'
                }
            })
        })
        .catch(({ response }) => {
            dispatch({ 
                type: SIGNUP_ERROR,
                payload: {
                    message: response.data.errors[0].message,
                    type: 'error'
                }
            }) 
        })
}

export let validateEmailAction = (email) => (dispatch, getState) => {
    axios.post(VALIDATE_EMAIL_URL, {
        campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
        data: { email }
    }).then(({ data }) => {
        if (data.data.status === 'EXISTS') {
            dispatch({
                type: EMAIL_VALIDATION_ERROR,
                payload: {
                    message: 'Email already exist',
                    type: 'error'
                }
            })
        } else {
            dispatch({ 
                type: EMAIL_VALIDATION_SUCCESS,
                payload: {
                    message: 'Valid Email :)',
                    type: 'success',
                }
            })
        }
    })
}
