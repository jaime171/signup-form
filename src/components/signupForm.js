import React from 'react';
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux'
import { validateEmailAction } from '../redux/userDuck'

const SignUpForm = ({ onSubmit, validateEmailAction }) => {

    const validateEmail = e => {
        validateEmailAction(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="inputContainer">
                <FontAwesomeIcon className="iconPosition" icon={faUser} />
                <input
                    className='formInput'
                    placeholder='First Name'
                    type='text'
                    name='firstName'
                    required />
            </div>
            <div className="inputContainer">
                <FontAwesomeIcon className="iconPosition" icon={faUser} />
                <input
                    className='formInput'
                    placeholder='Last Name'
                    type='text'
                    name='lastName'
                    required />
            </div>
            <div className="inputContainer">
                <FontAwesomeIcon className="iconPosition" icon={faEnvelope} />
                <input
                    className='formInput'
                    placeholder='Email'
                    type='email'
                    name='email'
                    onBlur={validateEmail}
                    required />

            </div>
            <div className="inputContainer">
                <FontAwesomeIcon className="iconPosition" icon={faLock} />
                <input
                    className='formInput'
                    placeholder='Password'
                    type='password'
                    name='password'
                    required />
            </div>
            <button className="submitBtn" type="submit">Register</button>
        </form>
    )
}

function mapState({}) {
    return {}
}

export default connect(
    mapState,
    {
        validateEmailAction
    }
)(SignUpForm)

