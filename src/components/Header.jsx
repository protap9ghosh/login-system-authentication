import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content px-28 place-content-between">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;