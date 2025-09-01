import React from 'react';
import UserContext from '../UseContext/UserContext';
import { useContext } from 'react';

const Login = () => {
    const { setUser } = useContext(UserContext);

    const handleLogin = () => {
        // Simulate a login
        setUser({ name: 'John Doe' });
    };

    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
}

export default Login;
