import { useRef, useContext, useState } from 'react';
import LoginContext from '../store/login-context';

const isEmpty = value => value.trim() === '';

const Login = () => {
    const cartCtx = useContext(LoginContext);
    const [formValid, setFormValid] = useState(true);
    const [loginAttempt, setLoginAttempt] = useState(false);
    const [userAuthenticated, setUserAuthenticated] = useState(false);

    const usernameRef = useRef();
    const passwordRef = useRef();

    const logInHandler = async (e) => {
        e.preventDefault();
        const user_name = usernameRef.current.value;
        const user_password = passwordRef.current.value;
        const form_invalid = isEmpty(user_name) || isEmpty(user_password);
        if (form_invalid) {
            setFormValid(false);
            return;
        }
        const authenticated_user = await authentication(user_name, user_password);
        if (authenticated_user) {
            cartCtx.login();
        };
    }

    const authentication = async (user_name, user_password) => {

        const payload = {
            name: user_name,
            password: user_password
        };
        let payloadData = new FormData();
        payloadData.append( "json", JSON.stringify(payload));
        const response = await fetch('http://volta.admin:85/api/login.php', {
            method: 'POST',
            body: payloadData
        });
        const responseData = await response.json();
        const data = await JSON.parse(responseData);
        setLoginAttempt(true);
        setUserAuthenticated(data.authentication.authenticated);
        return data.authentication.authenticated;
    }

    return (
        <div className="login">
            <h2>Log in</h2>
            <form name="login" id="login" className="login-form" onSubmit={logInHandler}>
                <div className="login-form__element">
                    <label htmlFor="user_name">Username</label>
                    <input type="text" name="user_name" id="user_name" className="login-form__input" autoComplete="off" ref={usernameRef} />
                </div>
                <div className="login-form__element">
                    <label htmlFor="user_password">Password</label>
                    <input type="password" name="user_password" id="user_password" className="login-form__input" autoComplete="off" ref={passwordRef} />
                </div>
                <div className="login-form__element">
                    <input type="submit" value="Log in" className="login-form__submit" />
                </div>
                {!formValid && !loginAttempt && <p className="login-form__message--error">Please enter some values</p>}
                {!userAuthenticated && loginAttempt && <p className="login-form__message--error">User not authenticated</p>}
            </form>
        </div>
    )
};

export default Login;
