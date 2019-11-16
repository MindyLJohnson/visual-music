import React from 'react';
import classes from './Login.module.scss';
import { Link } from 'react-router-dom';
import Span from '../../../components/units/Span/Span';
import FormInput from '../../../components/units/FormInput/formInput.component';

const emailValidators=[
    {
        validate:(value)=>{
            return value.includes('@')&&((value.match(/@/g) || []).length===1);
        },
        failMsg:'Email is not valid'
    }
];

const passwordValidators=[
    {
        validate:(value)=>{
            return value.length >= 6?true:false;
        },
        failMsg:'Password is too short'
    }
];

function LoginPage({ setEmail, setPassword, onFormSubmit, span }) {
    return (
        <div className={classes.overlay}>
            <div className={classes.loginOverlay}>
                <form className={classes.loginForm} onSubmit={onFormSubmit}>
                    <div className={classes.titleGroup}>
                        <span>Welcome back!</span>
                    </div>
                    <div className={classes.emailGroup}>
                        <div className={classes.emailGroup}>
                            <FormInput 
                                    labelText='Email address'
                                    type="email"
                                    validators={emailValidators}
                                    onChange={e=>setEmail(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className={classes.passwordGroup}>
                        <FormInput 
                                    labelText='Password'
                                    type="password"
                                    validators={passwordValidators}
                                    onChange={e=>setPassword(e.target.value)}
                            />
                    </div>
                    <div className={classes.loginButtonGroup}>
                        <button className={classes.loginButton} type="submite">
                            Login
                        </button>
                    </div>
                    <div className={classes.forgotPasswordLinksGroup}>
                        <Link
                            to="/forgot-password"
                            className={classes.forgotPasswordLink}
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {span && (
                        <Span className={classes.errorLabel} content={span} />
                    )}
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
