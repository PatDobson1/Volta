import { useReducer } from 'react';

import LoginContext from './login-context';

const defaultLoginState = {
    userLoggedIn: false,
    loginToken: null
};

const loginReducer = (state, action) => {

    if (action.type === 'LOGIN') {
        const newLogInState = true;

        return {
            userLoggedIn: newLogInState,
            loginToken: 'bob'
        }
    }

    if (action.type === 'LOGOUT') {
        const newLogInState = false;

        return {
            userLoggedIn: newLogInState,
            loginToken: null
        }

    }
};

const LoginProvider = (props) => {

    const [loginState, dispatchLoginAction] = useReducer(loginReducer, defaultLoginState);

    const logInHandler = () => {
        dispatchLoginAction({
            type: 'LOGIN'
        })
    }

    const logOutHandler = () => {
        dispatchLoginAction({
            type: 'LOGOUT'
        })
    }

    const loginContext = {
        userLoggedIn: loginState.userLoggedIn,
        loginToken: loginState.loginToken,
        login: logInHandler,
        logout: logOutHandler
    };

    return(
        <LoginContext.Provider value={loginContext}>
            {props.children}
        </LoginContext.Provider>
    )
};

export default LoginProvider;
