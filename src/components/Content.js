import { useContext } from 'react';
import LoginContext from '../store/login-context';

import Login from './Login';

const Content = () => {
    const loginCtx = useContext(LoginContext);

    const Content = loginCtx.userLoggedIn ? <><h2>User authenticated</h2><p>Page content</p></> : <Login />;

    return (
        <div className="content">
            {Content}
        </div>
    )
};

export default Content;
