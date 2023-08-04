import { useContext } from 'react';
import LoginContext from '../store/login-context';

const Menu = () => {

    const cartCtx = useContext(LoginContext);

    const logOutHandler = () => {
        cartCtx.logout();
    }

    const button = cartCtx.userLoggedIn
        ? <button className="header__menu-button" onClick={logOutHandler}>Log out</button>
        : '';

    return (
        <ul className="header__menu">
            <li>
                {button}
            </li>
        </ul>
    )
};

export default Menu;
