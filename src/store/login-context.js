import React from 'react';

const LoginContext = React.createContext({
    userLoggedIn: false,
    loginToken: null,
    login: () => {},
    logout: () => {}
});

export default LoginContext;
