// src/components/Auth.js
import React, { useState } from 'react';
import Login from './Login'; 
import Signup from './Signup'; 
import Header from './Header1';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuth = () => {
        setIsLogin(prev => !prev);
    };

    return (
        <div>
            <Header />
            <div className="container">
                {isLogin ? (
                    <Login toggleAuth={toggleAuth} />
                ) : (
                    <Signup toggleAuth={toggleAuth} />
                )}
            </div>
        </div>
    );
};

export default Auth;
