// Login.js

import React from 'react';
import './login.css'

function Login() {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Log in</h2>

            <form
                action="/login"
                method="post"
                style={{
                    maxWidth: '300px',
                    margin: '0 auto',
                    backgroundColor: '#fff',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    style={{
                        display: 'block',
                        width: '100%',
                        padding: '10px',
                        margin: '10px 0',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        fontSize: '16px',
                    }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    style={{
                        display: 'block',
                        width: '100%',
                        padding: '10px',
                        margin: '10px 0',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        fontSize: '16px',
                    }}
                />
                <input
                    type="submit"
                    style={{
                        backgroundColor: '#0074d9',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '10px 15px',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                />
            </form>
            <a
                href="signup"
                style={{
                    display: 'block',
                    textAlign: 'center',
                    marginTop: '20px',
                    textDecoration: 'none',
                    color: '#0074d9',
                }}
            >
                Sign up
            </a>
        </div>
    );
}

export default Login;
