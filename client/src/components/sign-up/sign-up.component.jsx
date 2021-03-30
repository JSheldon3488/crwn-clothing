import React, { useState } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signUpStart } from '../../redux/user/users.actions';

import { SignUpContainer, SingUpTitle } from './sign-up.styles'


const SignUp = ({ signUpStart }) => {
    const [userCredientals, setUserCredentials] = useState({
        displayName: '', 
        email: '', 
        password: '', 
        confirmPassword: ''
    })
    const { displayName, email, password, confirmPassword } = userCredientals;

    const handleSumbit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        signUpStart({ displayName, email, password });
    }

    const handleChange = (event) => { 
        const { name, value } = event.target;
        setUserCredentials({ ...userCredientals, [name]: value });
    }

    return (
        <SignUpContainer>
            <SingUpTitle>I do not have an acount</SingUpTitle>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSumbit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'> Sign Up </CustomButton>
            </form>
        </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredientals => dispatch(signUpStart(userCredientals))
})

export default connect(null, mapDispatchToProps)(SignUp)