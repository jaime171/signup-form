import React from 'react';
import { StatusMessage } from './statusMessage'
import { signUpAction } from '../redux/userDuck'
import { connect } from 'react-redux'
import SignUpForm from './signupForm'

const SignUp = ({ signUpAction, fetching, response = {} }) => {
    return (
        <div className='signUp'>
            <h1>Sign Up</h1>
            <StatusMessage message={response.message} type={response.type}/>
            {
                fetching
                    ? <h2>Loading ...</h2> // "Loading spinner or something"
                    : <SignUpForm onSubmit={e => {
                        e.preventDefault()
                        signUpAction({
                            campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
                            data: {
                                name: e.target[0].value,
                                lastName: e.target[1].value,
                                email: e.target[2].value,
                                password: e.target[3].value
                            }
                        })
                    }} />
            }
        </div>
    )
}

function mapState({ user: { fetching, response } }) {
    return {
        fetching,
        response
    }
}

export default connect(
    mapState,
    {
        signUpAction
    }
)(SignUp)
