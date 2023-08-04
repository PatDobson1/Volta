import LoginProvider from './store/LoginProvider';

import Header from './components/Header';
import Content from './components/Content';


function App() {
    return (
        <LoginProvider>
            <div className="App">
                <Header />
                <Content />
            </div>
        </LoginProvider>
    );
}

export default App;
