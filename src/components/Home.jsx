import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext);

    return (
        <div>
            <h2>This is a Home {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;